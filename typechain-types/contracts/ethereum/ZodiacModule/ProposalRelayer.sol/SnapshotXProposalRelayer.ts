/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface SnapshotXProposalRelayerInterface extends utils.Interface {
  functions: {
    "changeL2ExecutionRelayer(uint256)": FunctionFragment;
    "getGuard()": FunctionFragment;
    "guard()": FunctionFragment;
    "l2ExecutionRelayer()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGuard(address)": FunctionFragment;
    "starknetCore()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeL2ExecutionRelayer"
      | "getGuard"
      | "guard"
      | "l2ExecutionRelayer"
      | "owner"
      | "renounceOwnership"
      | "setGuard"
      | "starknetCore"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeL2ExecutionRelayer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
  encodeFunctionData(functionFragment: "guard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l2ExecutionRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGuard",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "starknetCore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeL2ExecutionRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2ExecutionRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "starknetCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ChangedGuard(address)": EventFragment;
    "ChangedL2ExecutionRelayer(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedL2ExecutionRelayer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ChangedGuardEventObject {
  guard: string;
}
export type ChangedGuardEvent = TypedEvent<[string], ChangedGuardEventObject>;

export type ChangedGuardEventFilter = TypedEventFilter<ChangedGuardEvent>;

export interface ChangedL2ExecutionRelayerEventObject {
  _l2ExecutionRelayer: BigNumber;
}
export type ChangedL2ExecutionRelayerEvent = TypedEvent<
  [BigNumber],
  ChangedL2ExecutionRelayerEventObject
>;

export type ChangedL2ExecutionRelayerEventFilter =
  TypedEventFilter<ChangedL2ExecutionRelayerEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SnapshotXProposalRelayer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SnapshotXProposalRelayerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    changeL2ExecutionRelayer(
      _l2ExecutionRelayer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGuard(overrides?: CallOverrides): Promise<[string] & { _guard: string }>;

    guard(overrides?: CallOverrides): Promise<[string]>;

    l2ExecutionRelayer(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGuard(
      _guard: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    starknetCore(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  changeL2ExecutionRelayer(
    _l2ExecutionRelayer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGuard(overrides?: CallOverrides): Promise<string>;

  guard(overrides?: CallOverrides): Promise<string>;

  l2ExecutionRelayer(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGuard(
    _guard: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  starknetCore(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeL2ExecutionRelayer(
      _l2ExecutionRelayer: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getGuard(overrides?: CallOverrides): Promise<string>;

    guard(overrides?: CallOverrides): Promise<string>;

    l2ExecutionRelayer(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGuard(
      _guard: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    starknetCore(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
    ChangedGuard(guard?: null): ChangedGuardEventFilter;

    "ChangedL2ExecutionRelayer(uint256)"(
      _l2ExecutionRelayer?: null
    ): ChangedL2ExecutionRelayerEventFilter;
    ChangedL2ExecutionRelayer(
      _l2ExecutionRelayer?: null
    ): ChangedL2ExecutionRelayerEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    changeL2ExecutionRelayer(
      _l2ExecutionRelayer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGuard(overrides?: CallOverrides): Promise<BigNumber>;

    guard(overrides?: CallOverrides): Promise<BigNumber>;

    l2ExecutionRelayer(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGuard(
      _guard: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    starknetCore(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeL2ExecutionRelayer(
      _l2ExecutionRelayer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ExecutionRelayer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGuard(
      _guard: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    starknetCore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
