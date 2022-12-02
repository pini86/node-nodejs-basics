import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = "fileToRead.txt";
const pathToFile = join(__dirname, "files", file);

const write = async () => {
  try {
    process.stdin.pipe(fs.createWriteStream(pathToFile));
  } catch (error) {
    throw new Error(error);
  }
};

await write();
