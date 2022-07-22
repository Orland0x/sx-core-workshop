import { StarknetContract } from 'hardhat/types/runtime';
import { expect } from 'chai';
import { starknet, ethers } from 'hardhat';
import { utils } from '@snapshot-labs/sx';

async function setup() {
  const exampleVotingStrategyFactory = await starknet.getContractFactory(
    './contracts/starknet/VotingStrategies/Example.cairo'
  );
  const exampleVotingStrategy = await exampleVotingStrategyFactory.deploy({token_address: "0x0000000000000000000000000000000000000000"});
  return {
    exampleVotingStrategy: exampleVotingStrategy as StarknetContract,
  };
}

describe('Example Voting Strategy:', () => {
  it('The voting strategy should return a voting power of 1', async () => {
    const { exampleVotingStrategy } = await setup();
    const { voting_power: vp } = await exampleVotingStrategy.call('get_voting_power', {
      timestamp: 1,
      voter_address: { value: BigInt(ethers.Wallet.createRandom().address) },
      params: [],
      user_params: [],
    });
    expect(new utils.splitUint256.SplitUint256(vp.low, vp.high)).to.deep.equal(
      utils.splitUint256.SplitUint256.fromUint(BigInt(1))
    );
  }).timeout(600000);
});
