import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldPath = path.resolve(__dirname, "files", "wrongFilename.txt");
const newPath = path.resolve(__dirname, "files", "properFilename.md");

const rename = async () => {
  await fsPromises.rename(oldPath, newPath).catch(() => callback());
};

function callback() {
  try {
    throw new Error("FS operation failed");
  } catch (error) {
    console.log(error.message);
  }
}

await rename();
