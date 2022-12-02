import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const delFilePath = path.resolve(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  await fsPromises.rm(delFilePath).catch(() => callback());
};

function callback() {
  try {
    throw new Error("FS operation failed");
  } catch (error) {
    console.log(error.message);
  }
}

await remove();
