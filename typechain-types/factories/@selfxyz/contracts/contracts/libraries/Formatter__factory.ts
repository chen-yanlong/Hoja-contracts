/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  Formatter,
  FormatterInterface,
} from "../../../../../@selfxyz/contracts/contracts/libraries/Formatter";

const _abi = [
  {
    inputs: [],
    name: "InvalidDateDigit",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDateLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDayRange",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidFieldElement",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMonthRange",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidYearRange",
    type: "error",
  },
] as const;

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300081c000a";

type FormatterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FormatterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Formatter__factory extends ContractFactory {
  constructor(...args: FormatterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Formatter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Formatter__factory {
    return super.connect(runner) as Formatter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FormatterInterface {
    return new Interface(_abi) as FormatterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Formatter {
    return new Contract(address, _abi, runner) as unknown as Formatter;
  }
}
