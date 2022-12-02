import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.resolve(__dirname, "files");

const list = async () => {
  await fsPromises
    .access(folderPath)
    .then(async () => {
      fsPromises.readdir(folderPath,).then((files) => {
        files.forEach((file) => {
          console.log(file);
        });
      });
    })
    .catch(() => {
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

await list();
