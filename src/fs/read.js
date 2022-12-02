import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  await fsPromises
    .readFile(filePath, { encoding: "utf-8" })
    .then((data) => {
      console.log(data);
    })
    .catch(() => callback());
};

function callback() {
  try {
    throw new Error("FS operation failed");
  } catch (error) {
    console.log(error.message);
  }
}

await read();
