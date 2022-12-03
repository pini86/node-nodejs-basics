import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { pipeline } from "stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");
const sourcePath = path.join(__dirname, "files", "archive.gz");
const unZip = createGunzip();

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(sourcePath),
      unZip,
      createWriteStream(destinationPath)
    );
  } catch (error) {
    throw new Error(error);
  }
};

await decompress();
