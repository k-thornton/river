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

export declare namespace IWalletLinkBase {
  export type LinkedWalletStruct = {
    addr: PromiseOrValue<string>;
    signature: PromiseOrValue<BytesLike>;
  };

  export type LinkedWalletStructOutput = [string, string] & {
    addr: string;
    signature: string;
  };
}

export interface IWalletLinkInterface extends utils.Interface {
  functions: {
    "checkIfLinked(address,address)": FunctionFragment;
    "getLatestNonceForRootKey(address)": FunctionFragment;
    "getRootKeyForWallet(address)": FunctionFragment;
    "getWalletsByRootKey(address)": FunctionFragment;
    "linkCallerToRootKey((address,bytes),uint256)": FunctionFragment;
    "linkWalletToRootKey((address,bytes),(address,bytes),uint256)": FunctionFragment;
    "removeLink(address,(address,bytes),uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkIfLinked"
      | "getLatestNonceForRootKey"
      | "getRootKeyForWallet"
      | "getWalletsByRootKey"
      | "linkCallerToRootKey"
      | "linkWalletToRootKey"
      | "removeLink"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkIfLinked",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestNonceForRootKey",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRootKeyForWallet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWalletsByRootKey",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "linkCallerToRootKey",
    values: [IWalletLinkBase.LinkedWalletStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "linkWalletToRootKey",
    values: [
      IWalletLinkBase.LinkedWalletStruct,
      IWalletLinkBase.LinkedWalletStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLink",
    values: [
      PromiseOrValue<string>,
      IWalletLinkBase.LinkedWalletStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkIfLinked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestNonceForRootKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRootKeyForWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWalletsByRootKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "linkCallerToRootKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "linkWalletToRootKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeLink", data: BytesLike): Result;

  events: {
    "LinkWalletToRootKey(address,address)": EventFragment;
    "RemoveLink(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LinkWalletToRootKey"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLink"): EventFragment;
}

export interface LinkWalletToRootKeyEventObject {
  wallet: string;
  rootKey: string;
}
export type LinkWalletToRootKeyEvent = TypedEvent<
  [string, string],
  LinkWalletToRootKeyEventObject
>;

export type LinkWalletToRootKeyEventFilter =
  TypedEventFilter<LinkWalletToRootKeyEvent>;

export interface RemoveLinkEventObject {
  wallet: string;
  secondWallet: string;
}
export type RemoveLinkEvent = TypedEvent<
  [string, string],
  RemoveLinkEventObject
>;

export type RemoveLinkEventFilter = TypedEventFilter<RemoveLinkEvent>;

export interface IWalletLink extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWalletLinkInterface;

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
    checkIfLinked(
      rootKey: PromiseOrValue<string>,
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getLatestNonceForRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRootKeyForWallet(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { rootKey: string }>;

    getWalletsByRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { wallets: string[] }>;

    linkCallerToRootKey(
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    linkWalletToRootKey(
      wallet: IWalletLinkBase.LinkedWalletStruct,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLink(
      wallet: PromiseOrValue<string>,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  checkIfLinked(
    rootKey: PromiseOrValue<string>,
    wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getLatestNonceForRootKey(
    rootKey: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRootKeyForWallet(
    wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getWalletsByRootKey(
    rootKey: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  linkCallerToRootKey(
    rootWallet: IWalletLinkBase.LinkedWalletStruct,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  linkWalletToRootKey(
    wallet: IWalletLinkBase.LinkedWalletStruct,
    rootWallet: IWalletLinkBase.LinkedWalletStruct,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLink(
    wallet: PromiseOrValue<string>,
    rootWallet: IWalletLinkBase.LinkedWalletStruct,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkIfLinked(
      rootKey: PromiseOrValue<string>,
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getLatestNonceForRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRootKeyForWallet(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getWalletsByRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    linkCallerToRootKey(
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    linkWalletToRootKey(
      wallet: IWalletLinkBase.LinkedWalletStruct,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeLink(
      wallet: PromiseOrValue<string>,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LinkWalletToRootKey(address,address)"(
      wallet?: PromiseOrValue<string> | null,
      rootKey?: PromiseOrValue<string> | null
    ): LinkWalletToRootKeyEventFilter;
    LinkWalletToRootKey(
      wallet?: PromiseOrValue<string> | null,
      rootKey?: PromiseOrValue<string> | null
    ): LinkWalletToRootKeyEventFilter;

    "RemoveLink(address,address)"(
      wallet?: PromiseOrValue<string> | null,
      secondWallet?: PromiseOrValue<string> | null
    ): RemoveLinkEventFilter;
    RemoveLink(
      wallet?: PromiseOrValue<string> | null,
      secondWallet?: PromiseOrValue<string> | null
    ): RemoveLinkEventFilter;
  };

  estimateGas: {
    checkIfLinked(
      rootKey: PromiseOrValue<string>,
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestNonceForRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRootKeyForWallet(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWalletsByRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    linkCallerToRootKey(
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    linkWalletToRootKey(
      wallet: IWalletLinkBase.LinkedWalletStruct,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLink(
      wallet: PromiseOrValue<string>,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkIfLinked(
      rootKey: PromiseOrValue<string>,
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestNonceForRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRootKeyForWallet(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWalletsByRootKey(
      rootKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linkCallerToRootKey(
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    linkWalletToRootKey(
      wallet: IWalletLinkBase.LinkedWalletStruct,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLink(
      wallet: PromiseOrValue<string>,
      rootWallet: IWalletLinkBase.LinkedWalletStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
