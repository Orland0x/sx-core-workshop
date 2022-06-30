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
} from "../../../common";

export interface MockStarknetMessagingInterface extends utils.Interface {
  functions: {
    "consumeMessageFromL2(uint256,uint256[])": FunctionFragment;
    "l1ToL2MessageNonce()": FunctionFragment;
    "l1ToL2Messages(bytes32)": FunctionFragment;
    "l2ToL1Messages(bytes32)": FunctionFragment;
    "mockConsumeMessageToL2(uint256,uint256,uint256,uint256[],uint256)": FunctionFragment;
    "mockSendMessageFromL2(uint256,uint256,uint256[])": FunctionFragment;
    "sendMessageToL2(uint256,uint256,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "consumeMessageFromL2"
      | "l1ToL2MessageNonce"
      | "l1ToL2Messages"
      | "l2ToL1Messages"
      | "mockConsumeMessageToL2"
      | "mockSendMessageFromL2"
      | "sendMessageToL2"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "consumeMessageFromL2",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "l1ToL2MessageNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l1ToL2Messages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1Messages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "mockConsumeMessageToL2",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mockSendMessageFromL2",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageToL2",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "consumeMessageFromL2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l1ToL2MessageNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l1ToL2Messages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1Messages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockConsumeMessageToL2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockSendMessageFromL2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageToL2",
    data: BytesLike
  ): Result;

  events: {
    "ConsumedMessageToL1(uint256,address,uint256[])": EventFragment;
    "ConsumedMessageToL2(address,uint256,uint256,uint256[],uint256)": EventFragment;
    "LogMessageToL1(uint256,address,uint256[])": EventFragment;
    "LogMessageToL2(address,uint256,uint256,uint256[],uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConsumedMessageToL1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConsumedMessageToL2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogMessageToL1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogMessageToL2"): EventFragment;
}

export interface ConsumedMessageToL1EventObject {
  from_address: BigNumber;
  to_address: string;
  payload: BigNumber[];
}
export type ConsumedMessageToL1Event = TypedEvent<
  [BigNumber, string, BigNumber[]],
  ConsumedMessageToL1EventObject
>;

export type ConsumedMessageToL1EventFilter =
  TypedEventFilter<ConsumedMessageToL1Event>;

export interface ConsumedMessageToL2EventObject {
  from_address: string;
  to_address: BigNumber;
  selector: BigNumber;
  payload: BigNumber[];
  nonce: BigNumber;
}
export type ConsumedMessageToL2Event = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber[], BigNumber],
  ConsumedMessageToL2EventObject
>;

export type ConsumedMessageToL2EventFilter =
  TypedEventFilter<ConsumedMessageToL2Event>;

export interface LogMessageToL1EventObject {
  from_address: BigNumber;
  to_address: string;
  payload: BigNumber[];
}
export type LogMessageToL1Event = TypedEvent<
  [BigNumber, string, BigNumber[]],
  LogMessageToL1EventObject
>;

export type LogMessageToL1EventFilter = TypedEventFilter<LogMessageToL1Event>;

export interface LogMessageToL2EventObject {
  from_address: string;
  to_address: BigNumber;
  selector: BigNumber;
  payload: BigNumber[];
  nonce: BigNumber;
}
export type LogMessageToL2Event = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber[], BigNumber],
  LogMessageToL2EventObject
>;

export type LogMessageToL2EventFilter = TypedEventFilter<LogMessageToL2Event>;

export interface MockStarknetMessaging extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockStarknetMessagingInterface;

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
    consumeMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    l1ToL2MessageNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    l1ToL2Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    l2ToL1Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mockConsumeMessageToL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mockSendMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendMessageToL2(
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  consumeMessageFromL2(
    from_address: PromiseOrValue<BigNumberish>,
    payload: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  l1ToL2MessageNonce(overrides?: CallOverrides): Promise<BigNumber>;

  l1ToL2Messages(
    msgHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  l2ToL1Messages(
    msgHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mockConsumeMessageToL2(
    from_address: PromiseOrValue<BigNumberish>,
    to_address: PromiseOrValue<BigNumberish>,
    selector: PromiseOrValue<BigNumberish>,
    payload: PromiseOrValue<BigNumberish>[],
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mockSendMessageFromL2(
    from_address: PromiseOrValue<BigNumberish>,
    to_address: PromiseOrValue<BigNumberish>,
    payload: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendMessageToL2(
    to_address: PromiseOrValue<BigNumberish>,
    selector: PromiseOrValue<BigNumberish>,
    payload: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    consumeMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<string>;

    l1ToL2MessageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    l1ToL2Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2ToL1Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mockConsumeMessageToL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mockSendMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageToL2(
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ConsumedMessageToL1(uint256,address,uint256[])"(
      from_address?: PromiseOrValue<BigNumberish> | null,
      to_address?: PromiseOrValue<string> | null,
      payload?: null
    ): ConsumedMessageToL1EventFilter;
    ConsumedMessageToL1(
      from_address?: PromiseOrValue<BigNumberish> | null,
      to_address?: PromiseOrValue<string> | null,
      payload?: null
    ): ConsumedMessageToL1EventFilter;

    "ConsumedMessageToL2(address,uint256,uint256,uint256[],uint256)"(
      from_address?: PromiseOrValue<string> | null,
      to_address?: PromiseOrValue<BigNumberish> | null,
      selector?: PromiseOrValue<BigNumberish> | null,
      payload?: null,
      nonce?: null
    ): ConsumedMessageToL2EventFilter;
    ConsumedMessageToL2(
      from_address?: PromiseOrValue<string> | null,
      to_address?: PromiseOrValue<BigNumberish> | null,
      selector?: PromiseOrValue<BigNumberish> | null,
      payload?: null,
      nonce?: null
    ): ConsumedMessageToL2EventFilter;

    "LogMessageToL1(uint256,address,uint256[])"(
      from_address?: PromiseOrValue<BigNumberish> | null,
      to_address?: PromiseOrValue<string> | null,
      payload?: null
    ): LogMessageToL1EventFilter;
    LogMessageToL1(
      from_address?: PromiseOrValue<BigNumberish> | null,
      to_address?: PromiseOrValue<string> | null,
      payload?: null
    ): LogMessageToL1EventFilter;

    "LogMessageToL2(address,uint256,uint256,uint256[],uint256)"(
      from_address?: PromiseOrValue<string> | null,
      to_address?: PromiseOrValue<BigNumberish> | null,
      selector?: PromiseOrValue<BigNumberish> | null,
      payload?: null,
      nonce?: null
    ): LogMessageToL2EventFilter;
    LogMessageToL2(
      from_address?: PromiseOrValue<string> | null,
      to_address?: PromiseOrValue<BigNumberish> | null,
      selector?: PromiseOrValue<BigNumberish> | null,
      payload?: null,
      nonce?: null
    ): LogMessageToL2EventFilter;
  };

  estimateGas: {
    consumeMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    l1ToL2MessageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    l1ToL2Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2ToL1Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mockConsumeMessageToL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mockSendMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendMessageToL2(
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    consumeMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    l1ToL2MessageNonce(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l1ToL2Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l2ToL1Messages(
      msgHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mockConsumeMessageToL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mockSendMessageFromL2(
      from_address: PromiseOrValue<BigNumberish>,
      to_address: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageToL2(
      to_address: PromiseOrValue<BigNumberish>,
      selector: PromiseOrValue<BigNumberish>,
      payload: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
