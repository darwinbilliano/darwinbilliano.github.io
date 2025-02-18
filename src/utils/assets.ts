import type { StaticImageData } from "next/dist/shared/lib/get-img-props";

const assets = {
  svg: async function (id: string): Promise<string | StaticImageData> {
    try {
      const asset = await import(`@/assets/${id}`);
      return asset.default as StaticImageData;
    } catch {
      return "";
    }
  },
};

export default assets;
