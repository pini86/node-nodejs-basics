import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathFile = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(pathFile, args);
};

spawnChildProcess(["arguments1", "arguments2"]);
