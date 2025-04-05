import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "@nomicfoundation/hardhat-ignition-ethers";
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: true
        }
      },
      metadata: {
        bytecodeHash: "none"
      },
      viaIR: false,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  defaultNetwork: "hardhat",
  networks: {
    celo_alfajores: {
      chainId: 44787,
      url: process.env.CELO_RPC_URL || "https://alfajores-forno.celo-testnet.org/",
      accounts: [process.env.CELO_KEY as string],
    }
  },
  etherscan: {
    apiKey: {
      celo_alfajores: process.env.CELOSCAN_API_KEY as string,
    },
    customChains: [
      {
        network: "celo_alfajores", // Ensure this is the Testnet network
        chainId: 44787, // Alfajores Testnet Chain ID
        urls: {
          apiURL: "https://api.celoscan.io/api", // Testnet API URL
          browserURL: "https://alfajores.celoscan.io", // Testnet Etherscan browser URL
        }
      }
    ]
  }
};
export default config;