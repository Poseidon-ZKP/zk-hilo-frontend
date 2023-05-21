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
} from "./common";

export type GameStruct = {
  players: [PromiseOrValue<string>, PromiseOrValue<string>];
  health: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  shield: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  shuffleIds: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  curPlayerIndex: PromiseOrValue<BigNumberish>;
  pkX: PromiseOrValue<BigNumberish>;
  pkY: PromiseOrValue<BigNumberish>;
};

export type GameStructOutput = [
  [string, string],
  [BigNumber, BigNumber],
  [BigNumber, BigNumber],
  [BigNumber, BigNumber],
  BigNumber,
  BigNumber,
  BigNumber
] & {
  players: [string, string];
  health: [BigNumber, BigNumber];
  shield: [BigNumber, BigNumber];
  shuffleIds: [BigNumber, BigNumber];
  curPlayerIndex: BigNumber;
  pkX: BigNumber;
  pkY: BigNumber;
};

export interface HearthStoneInterface extends utils.Interface {
  functions: {
    "INVALID_INDEX()": FunctionFragment;
    "cardConfig()": FunctionFragment;
    "chooseCard(uint256,uint256,uint256)": FunctionFragment;
    "createShuffleForCreator(uint256,uint256)": FunctionFragment;
    "createShuffleForJoiner(uint256,uint256,uint256)": FunctionFragment;
    "dealCardsToPlayer(uint256)": FunctionFragment;
    "getGameInfo(uint256)": FunctionFragment;
    "largestHSId()": FunctionFragment;
    "moveToShuffleStage(uint256)": FunctionFragment;
    "settle(uint256,uint256,uint256)": FunctionFragment;
    "shuffle()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INVALID_INDEX"
      | "cardConfig"
      | "chooseCard"
      | "createShuffleForCreator"
      | "createShuffleForJoiner"
      | "dealCardsToPlayer"
      | "getGameInfo"
      | "largestHSId"
      | "moveToShuffleStage"
      | "settle"
      | "shuffle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "INVALID_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cardConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "chooseCard",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createShuffleForCreator",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createShuffleForJoiner",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dealCardsToPlayer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "largestHSId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moveToShuffleStage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "settle",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "shuffle", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "INVALID_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cardConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chooseCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createShuffleForCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createShuffleForJoiner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dealCardsToPlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "largestHSId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveToShuffleStage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shuffle", data: BytesLike): Result;

  events: {
    "ChooseCard(uint256,address,uint256,uint256)": EventFragment;
    "CreateGame(uint256,uint256,address)": EventFragment;
    "EndGame(uint256,uint256)": EventFragment;
    "JoinGame(uint256,uint256,address)": EventFragment;
    "NextPlayer(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChooseCard"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JoinGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NextPlayer"): EventFragment;
}

export interface ChooseCardEventObject {
  hsId: BigNumber;
  player: string;
  playerIdx: BigNumber;
  cardIdx: BigNumber;
}
export type ChooseCardEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  ChooseCardEventObject
>;

export type ChooseCardEventFilter = TypedEventFilter<ChooseCardEvent>;

export interface CreateGameEventObject {
  hsId: BigNumber;
  shuffleId: BigNumber;
  creator: string;
}
export type CreateGameEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  CreateGameEventObject
>;

export type CreateGameEventFilter = TypedEventFilter<CreateGameEvent>;

export interface EndGameEventObject {
  hsId: BigNumber;
  playerIdx: BigNumber;
}
export type EndGameEvent = TypedEvent<
  [BigNumber, BigNumber],
  EndGameEventObject
>;

export type EndGameEventFilter = TypedEventFilter<EndGameEvent>;

export interface JoinGameEventObject {
  hsId: BigNumber;
  shuffleId: BigNumber;
  joiner: string;
}
export type JoinGameEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  JoinGameEventObject
>;

export type JoinGameEventFilter = TypedEventFilter<JoinGameEvent>;

export interface NextPlayerEventObject {
  hsId: BigNumber;
  playerIdx: BigNumber;
}
export type NextPlayerEvent = TypedEvent<
  [BigNumber, BigNumber],
  NextPlayerEventObject
>;

export type NextPlayerEventFilter = TypedEventFilter<NextPlayerEvent>;

export interface HearthStone extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HearthStoneInterface;

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
    INVALID_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    cardConfig(overrides?: CallOverrides): Promise<[number]>;

    chooseCard(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createShuffleForCreator(
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createShuffleForJoiner(
      hsId: PromiseOrValue<BigNumberish>,
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dealCardsToPlayer(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGameInfo(
      hsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[GameStructOutput]>;

    largestHSId(overrides?: CallOverrides): Promise<[BigNumber]>;

    moveToShuffleStage(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shuffle(overrides?: CallOverrides): Promise<[string]>;
  };

  INVALID_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  cardConfig(overrides?: CallOverrides): Promise<number>;

  chooseCard(
    hsId: PromiseOrValue<BigNumberish>,
    playerIdx: PromiseOrValue<BigNumberish>,
    cardIdx: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createShuffleForCreator(
    pkX: PromiseOrValue<BigNumberish>,
    pkY: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createShuffleForJoiner(
    hsId: PromiseOrValue<BigNumberish>,
    pkX: PromiseOrValue<BigNumberish>,
    pkY: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dealCardsToPlayer(
    shuffleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGameInfo(
    hsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<GameStructOutput>;

  largestHSId(overrides?: CallOverrides): Promise<BigNumber>;

  moveToShuffleStage(
    shuffleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle(
    hsId: PromiseOrValue<BigNumberish>,
    playerIdx: PromiseOrValue<BigNumberish>,
    cardIdx: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shuffle(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    INVALID_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    cardConfig(overrides?: CallOverrides): Promise<number>;

    chooseCard(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createShuffleForCreator(
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createShuffleForJoiner(
      hsId: PromiseOrValue<BigNumberish>,
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    dealCardsToPlayer(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getGameInfo(
      hsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<GameStructOutput>;

    largestHSId(overrides?: CallOverrides): Promise<BigNumber>;

    moveToShuffleStage(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settle(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    shuffle(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ChooseCard(uint256,address,uint256,uint256)"(
      hsId?: PromiseOrValue<BigNumberish> | null,
      player?: null,
      playerIdx?: null,
      cardIdx?: null
    ): ChooseCardEventFilter;
    ChooseCard(
      hsId?: PromiseOrValue<BigNumberish> | null,
      player?: null,
      playerIdx?: null,
      cardIdx?: null
    ): ChooseCardEventFilter;

    "CreateGame(uint256,uint256,address)"(
      hsId?: PromiseOrValue<BigNumberish> | null,
      shuffleId?: null,
      creator?: null
    ): CreateGameEventFilter;
    CreateGame(
      hsId?: PromiseOrValue<BigNumberish> | null,
      shuffleId?: null,
      creator?: null
    ): CreateGameEventFilter;

    "EndGame(uint256,uint256)"(
      hsId?: PromiseOrValue<BigNumberish> | null,
      playerIdx?: null
    ): EndGameEventFilter;
    EndGame(
      hsId?: PromiseOrValue<BigNumberish> | null,
      playerIdx?: null
    ): EndGameEventFilter;

    "JoinGame(uint256,uint256,address)"(
      hsId?: PromiseOrValue<BigNumberish> | null,
      shuffleId?: null,
      joiner?: null
    ): JoinGameEventFilter;
    JoinGame(
      hsId?: PromiseOrValue<BigNumberish> | null,
      shuffleId?: null,
      joiner?: null
    ): JoinGameEventFilter;

    "NextPlayer(uint256,uint256)"(
      hsId?: PromiseOrValue<BigNumberish> | null,
      playerIdx?: null
    ): NextPlayerEventFilter;
    NextPlayer(
      hsId?: PromiseOrValue<BigNumberish> | null,
      playerIdx?: null
    ): NextPlayerEventFilter;
  };

  estimateGas: {
    INVALID_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    cardConfig(overrides?: CallOverrides): Promise<BigNumber>;

    chooseCard(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createShuffleForCreator(
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createShuffleForJoiner(
      hsId: PromiseOrValue<BigNumberish>,
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dealCardsToPlayer(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGameInfo(
      hsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    largestHSId(overrides?: CallOverrides): Promise<BigNumber>;

    moveToShuffleStage(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shuffle(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    INVALID_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cardConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    chooseCard(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createShuffleForCreator(
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createShuffleForJoiner(
      hsId: PromiseOrValue<BigNumberish>,
      pkX: PromiseOrValue<BigNumberish>,
      pkY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dealCardsToPlayer(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGameInfo(
      hsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    largestHSId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moveToShuffleStage(
      shuffleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle(
      hsId: PromiseOrValue<BigNumberish>,
      playerIdx: PromiseOrValue<BigNumberish>,
      cardIdx: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shuffle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
