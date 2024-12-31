import fs from "fs/promises";
import yaml from "js-yaml";
import path from "path";

const contentDir = "./content";

const loader = {
  loadAsync: async function <T>(name: string) {
    const file = path.join(contentDir, name);
    const content = await fs.readFile(file, "utf-8");
    return yaml.load(content) as T;
  },
};

export default loader;
