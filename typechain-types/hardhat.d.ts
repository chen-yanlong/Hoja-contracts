/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1363",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1363__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "SelfVerificationRoot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfVerificationRoot__factory>;
    getContractFactory(
      name: "IDscCircuitVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDscCircuitVerifier__factory>;
    getContractFactory(
      name: "IIdentityVerificationHubV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIdentityVerificationHubV1__factory>;
    getContractFactory(
      name: "IRegisterCircuitVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRegisterCircuitVerifier__factory>;
    getContractFactory(
      name: "ISelfVerificationRoot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISelfVerificationRoot__factory>;
    getContractFactory(
      name: "IVcAndDiscloseCircuitVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVcAndDiscloseCircuitVerifier__factory>;
    getContractFactory(
      name: "CircuitAttributeHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CircuitAttributeHandler__factory>;
    getContractFactory(
      name: "Formatter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Formatter__factory>;
    getContractFactory(
      name: "SelfHappyBirthday",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfHappyBirthday__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1363",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1363>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SafeERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeERC20>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "SelfVerificationRoot",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfVerificationRoot>;
    getContractAt(
      name: "IDscCircuitVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IDscCircuitVerifier>;
    getContractAt(
      name: "IIdentityVerificationHubV1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IIdentityVerificationHubV1>;
    getContractAt(
      name: "IRegisterCircuitVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IRegisterCircuitVerifier>;
    getContractAt(
      name: "ISelfVerificationRoot",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISelfVerificationRoot>;
    getContractAt(
      name: "IVcAndDiscloseCircuitVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVcAndDiscloseCircuitVerifier>;
    getContractAt(
      name: "CircuitAttributeHandler",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CircuitAttributeHandler>;
    getContractAt(
      name: "Formatter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Formatter>;
    getContractAt(
      name: "SelfHappyBirthday",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfHappyBirthday>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1363",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1363>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeERC20>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "SelfVerificationRoot",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SelfVerificationRoot>;
    deployContract(
      name: "IDscCircuitVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IDscCircuitVerifier>;
    deployContract(
      name: "IIdentityVerificationHubV1",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IIdentityVerificationHubV1>;
    deployContract(
      name: "IRegisterCircuitVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRegisterCircuitVerifier>;
    deployContract(
      name: "ISelfVerificationRoot",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISelfVerificationRoot>;
    deployContract(
      name: "IVcAndDiscloseCircuitVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVcAndDiscloseCircuitVerifier>;
    deployContract(
      name: "CircuitAttributeHandler",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CircuitAttributeHandler>;
    deployContract(
      name: "Formatter",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Formatter>;
    deployContract(
      name: "SelfHappyBirthday",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SelfHappyBirthday>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1363",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1363>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "SafeERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeERC20>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "SelfVerificationRoot",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SelfVerificationRoot>;
    deployContract(
      name: "IDscCircuitVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IDscCircuitVerifier>;
    deployContract(
      name: "IIdentityVerificationHubV1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IIdentityVerificationHubV1>;
    deployContract(
      name: "IRegisterCircuitVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRegisterCircuitVerifier>;
    deployContract(
      name: "ISelfVerificationRoot",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISelfVerificationRoot>;
    deployContract(
      name: "IVcAndDiscloseCircuitVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVcAndDiscloseCircuitVerifier>;
    deployContract(
      name: "CircuitAttributeHandler",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CircuitAttributeHandler>;
    deployContract(
      name: "Formatter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Formatter>;
    deployContract(
      name: "SelfHappyBirthday",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SelfHappyBirthday>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
