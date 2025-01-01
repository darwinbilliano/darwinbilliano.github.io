import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as faBrands from "@fortawesome/free-brands-svg-icons";

const fa = {
  getBrand: function (name: string) {
    return faBrands[name as keyof typeof faBrands] as IconDefinition;
  },
};

export default fa;
