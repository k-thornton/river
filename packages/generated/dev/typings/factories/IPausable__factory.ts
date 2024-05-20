/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPausable, IPausableInterface } from "../IPausable";

const _abi = [
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "Pausable__NotPaused",
    inputs: [],
  },
  {
    type: "error",
    name: "Pausable__Paused",
    inputs: [],
  },
] as const;

export class IPausable__factory {
  static readonly abi = _abi;
  static createInterface(): IPausableInterface {
    return new utils.Interface(_abi) as IPausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPausable {
    return new Contract(address, _abi, signerOrProvider) as IPausable;
  }
}
