import { dirname } from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import path from "path";
import fsPromises from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = "fileToCalculateHashFor.txt";
const pathToFile = path.resolve(__dirname, "files", fileName);

const calculateHash = async () => {
  await fsPromises
    .readFile(pathToFile)
    .then((fileBuffer) => {
      console.log(createHash("sha256").update(fileBuffer).digest("hex"));
    })
    .catch((error) => {
      throw new Error(error);
    });
};

await calculateHash();
