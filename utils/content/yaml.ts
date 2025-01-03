import fs from "fs/promises";
import jsyaml from "js-yaml";
import path from "path";

const contentDir = "./content";

const yaml = {
  read: async function <T>(name: string) {
    const file = path.join(contentDir, name);
    const content = await fs.readFile(file, "utf-8");
    return jsyaml.load(content) as T;
  },
};

export default yaml;
