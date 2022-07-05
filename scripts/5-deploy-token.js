import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // Token name? Ex. "Ethereum"
      name: "ApexDAO Governance Token",
      // Token's symbol? Ex. "ETH"
      symbol: "LEGEND",
      // This will be in case we want to sell the token,
      // no sale, set to AddressZero.
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();