import path from "path";
import fsPromises from "fs/promises";
import { exit } from "process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.resolve(__dirname, "files", "fresh.txt");

export const create = async () => {
  await fsPromises
    .access(pathToFile)
    .catch(async () => {
      await fsPromises.writeFile(pathToFile, "I am fresh and young");
      exit(0);
    })
    .then(() => {
      callback();
    });
};

function callback() {
  try {
    throw new Error("FS operation failed");
  } catch (error) {
    console.log(error.message);
  }
}

create();
