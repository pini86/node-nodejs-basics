import fs from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = "fileToRead.txt";
const pathToFile = join(__dirname, "files", file);

const read = async () => {
  try {
    await pipeline(fs.createReadStream(pathToFile), process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await read();
