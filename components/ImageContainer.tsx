import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import { imagesprops } from "./ImageData";

const ImageContainer = async ({ value }: { value: imagesprops }) => {

const buffer= await fs.readFile(`./public${value.img}`);
const {base64}= await getPlaiceholder(buffer)

  return (
    <div className="relative max-w-lg md:max-w-md h-60">
      <Image
        className="dark:invert"
        src={value.img}
        alt={value.imgId}
        fill
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               25vw"
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
};

export default ImageContainer;
