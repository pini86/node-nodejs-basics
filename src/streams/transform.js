import { Transform, pipeline } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chunk.toString().trim().split("").reverse().join("")}\n`);
      callback();
    },
  });
  pipeline(process.stdin, reverseStream, process.stdout, (error) => {
    throw new Error(error);
  });
};

await transform();
