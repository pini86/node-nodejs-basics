import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
const destinationPath = path.join(__dirname, "files", "archive.gz");
const zip = createGzip();

const compress = async () => {
  try {
    await pipeline(
      createReadStream(sourcePath),
      zip,
      createWriteStream(destinationPath)
    );
  } catch (error) {
    throw new Error(error);
  }
};

await compress();
