import type { StaticImport } from "next/dist/shared/lib/get-img-props";

const assets = {
  svg: async function (id: string) {
    const asset = await import(`@/assets/${id}`);
    return asset.default as StaticImport;
  },
};

export default assets;
