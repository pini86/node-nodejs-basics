import { Transform, pipeline } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(data, enc, cb) {
      this.push(`${data.toString().trim().split("").reverse().join("")}\n`);
      cb();
    },
  });
  pipeline(process.stdin, reverseStream, process.stdout, (error) => {
    throw new Error(error);
  });
};

await transform();
