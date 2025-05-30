/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IVcAndDiscloseCircuitVerifier,
  IVcAndDiscloseCircuitVerifierInterface,
} from "../../../../../@selfxyz/contracts/contracts/interfaces/IVcAndDiscloseCircuitVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[21]",
        name: "pubSignals",
        type: "uint256[21]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IVcAndDiscloseCircuitVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IVcAndDiscloseCircuitVerifierInterface {
    return new Interface(_abi) as IVcAndDiscloseCircuitVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IVcAndDiscloseCircuitVerifier {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IVcAndDiscloseCircuitVerifier;
  }
}
