import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFrom = path.resolve(__dirname, "files");
const pathTo = path.resolve(__dirname, "files_copy");

export const copy = async () => {
  await fsPromises
    .access(pathFrom)
    .catch(() => {
      callback();
    })
    .then(async () => {
      await fsPromises
        .access(pathTo)
        .then(() => callback())
        .catch(() => {
          fsPromises.mkdir(pathTo).then;
          copyFiles(pathFrom, pathTo);
        });
    });

  async function copyFiles(source, destination) {
    await fsPromises
      .cp(source, destination, { recursive: true })
      .catch(() => callback());
  }

  function callback() {
    try {
      throw new Error("FS operation failed");
    } catch (error) {
      console.log(error.message);
    }
  }
};

copy();
