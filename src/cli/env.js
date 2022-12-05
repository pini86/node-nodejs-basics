import { env } from "process";

const parseEnv = () => {
  const output = [];

  for (const entity in env) {
    if (entity.match(/RSS_\w*/)) output.push(`${entity}=${env[entity]}`);
  }
  console.log(output.join("; "));
  
};

parseEnv();
