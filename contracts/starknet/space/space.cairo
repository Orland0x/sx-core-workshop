%lang starknet

from starkware.starknet.common.syscalls import get_caller_address, get_block_number
from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.math import assert_lt, assert_le, assert_nn, assert_not_zero
from contracts.starknet.strategies.interface import IVotingStrategy
from contracts.starknet.lib.types import EthAddress
from contracts.starknet.objects.proposal import Proposal
from contracts.starknet.objects.proposal_info import ProposalInfo
from contracts.starknet.objects.vote import Vote
from contracts.starknet.objects.choice import Choice
from starkware.cairo.common.alloc import alloc
from starkware.cairo.common.uint256 import Uint256, uint256_add, uint256_lt

@storage_var
func voting_delay() -> (delay : felt):
end

@storage_var
func voting_period() -> (period : felt):
end

@storage_var
func proposal_threshold() -> (threshold : Uint256):
end

# TODO: Should be Address not felt
@storage_var
func voting_strategy() -> (strategy_address : felt):
end

@storage_var
func authenticator() -> (authenticator_address : felt):
end

@storage_var
func next_proposal_nonce() -> (nonce : felt):
end

@storage_var
func proposal_registry(proposal_id : felt) -> (proposal : Proposal):
end

@storage_var
func vote_registry(proposal_id : felt, voter_address : EthAddress) -> (vote : Vote):
end

@storage_var
func vote_power(proposal_id : felt, choice : felt) -> (power : Uint256):
end

# Throws if the caller address is not identical to the authenticator address (stored in the `authenticator` variable)
func authenticator_only{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}():
    let (caller_address) = get_caller_address()
    let (authenticator_address) = authenticator.read()

    # Ensure it has been initialized
    assert_not_zero(authenticator_address)
    # Ensure the caller is the authenticator contract
    assert caller_address = authenticator_address

    return ()
end

@constructor
func constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}(
        _voting_delay : felt, _voting_period : felt, _proposal_threshold : Uint256,
        _voting_strategy : felt, _authenticator : felt):
    # Sanity checks
    assert_nn(_voting_delay)
    assert_nn(_voting_period)
    assert_not_zero(_voting_strategy)
    assert_not_zero(_authenticator)
    # TODO: maybe use uint256_signed_nn to check proposal_threshold?

    # Initialize the storage variables
    voting_delay.write(_voting_delay)
    voting_period.write(_voting_period)
    proposal_threshold.write(_proposal_threshold)
    voting_strategy.write(_voting_strategy)
    authenticator.write(_authenticator)
    next_proposal_nonce.write(1)

    return ()
end

@external
func vote{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}(
        voter_address : EthAddress, proposal_id : felt, choice : felt) -> ():
    alloc_locals

    # Verify that the caller is the authenticator contract.
    authenticator_only()

    let (proposal) = proposal_registry.read(proposal_id)
    let (current_block) = get_block_number()

    # Make sure proposal is not closed
    assert_lt(current_block, proposal.end_block)

    # Make sure proposal has started
    assert_le(proposal.start_block, current_block)

    # Make sure voter has not already voted
    let (prev_vote) = vote_registry.read(proposal_id, voter_address)
    if prev_vote.choice != 0:
        # Voter has already voted!
        assert 1 = 0
    end

    let (local params : felt*) = alloc()
    let (strategy_contract) = voting_strategy.read()

    let (user_voting_power) = IVotingStrategy.get_voting_power(
        contract_address=strategy_contract,
        address=voter_address,
        at=current_block,
        params_len=0,
        params=params)

    # Make sure `choice` is a valid choice
    assert_le(Choice.AGAINST, choice)
    assert_le(choice, Choice.ABSTAIN)

    let (previous_voting_power) = vote_power.read(proposal_id, choice)
    # TODO: decide what to do with carry
    let (new_voting_power, carry) = uint256_add(user_voting_power, previous_voting_power)
    vote_power.write(proposal_id, choice, new_voting_power)

    let vote = Vote(choice=choice, voting_power=user_voting_power)
    vote_registry.write(proposal_id, voter_address, vote)

    return ()
end

# TODO: execution_hash should be of type Hash and metadata_uri of type felt* (string)
@external
func propose{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}(
        proposer_address : EthAddress, execution_hash : felt, metadata_uri : felt) -> ():
    alloc_locals

    # Verify that the caller is the authenticator contract.
    authenticator_only()

    let (current_block) = get_block_number()
    let (delay) = voting_delay.read()
    let (duration) = voting_period.read()

    # Define start_block and end_block based on current block, delay and duration variables.
    let start_block = current_block + delay
    let end_block = start_block + duration

    # Get the voting power of the proposer
    let (strategy_contract) = voting_strategy.read()
    let (local params : felt*) = alloc()
    let (voting_power) = IVotingStrategy.get_voting_power(
        contract_address=strategy_contract,
        address=proposer_address,
        at=current_block,
        params_len=0,
        params=params)

    # Verify that the proposer has enough voting power to trigger a proposal
    let (threshold) = proposal_threshold.read()
    let (lower) = uint256_lt(voting_power, threshold)
    if lower == 1:
        # Not enough voting power to create a proposal
        assert 1 = 0
    end

    # Create the proposal and its proposal id
    let proposal = Proposal(execution_hash, metadata_uri, start_block, end_block)
    let (proposal_id) = next_proposal_nonce.read()

    # Store the proposal
    proposal_registry.write(proposal_id, proposal)

    # Increase the proposal nonce
    next_proposal_nonce.write(proposal_id + 1)

    return ()
end

@view
func get_vote_info{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}(
        voter_address : EthAddress, proposal_id : felt) -> (vote : Vote):
    return vote_registry.read(proposal_id, voter_address)
end

@view
func get_nonce{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}() -> (
        next_nonce : felt):
    let (nonce) = next_proposal_nonce.read()
    return (next_nonce=nonce)
end

@view
func get_delay{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}() -> (
        delay : felt):
    let (delay) = voting_delay.read()
    return (delay=delay)
end

@view
func get_period{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}() -> (
        period : felt):
    let (period) = voting_period.read()
    return (period=period)
end

@view
func get_proposal_info{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr : felt}(
        proposal_id : felt) -> (proposal_info : ProposalInfo):
    let (proposal) = proposal_registry.read(proposal_id)

    let (_power_against) = vote_power.read(proposal_id, Choice.AGAINST)
    let (_power_for) = vote_power.read(proposal_id, Choice.FOR)
    let (_power_abstain) = vote_power.read(proposal_id, Choice.ABSTAIN)
    return (
        ProposalInfo(proposal=proposal, power_against=_power_against, power_for=_power_for, power_abstain=_power_abstain))
end
