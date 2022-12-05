import { argv } from "process";

const parseArgs = () => {
  console.log(
    argv
      .filter((entity) => entity.match(/--\w*/))
      .map((item) => `${item.slice(2)} is ${argv[argv.indexOf(item) + 1]}`)
      .join(", ")
  );
};

parseArgs();
