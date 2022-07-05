import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x88a5900034D1EA2Fb4e8DDF334a6A1bb67c240fd");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Rank Badge",
        description: "This NFT will give you access to ApexDAO!",
        image: readFileSync("scripts/assets/diamond.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();