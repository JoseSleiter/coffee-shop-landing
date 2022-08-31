import React from "react";
import Image, { StaticImageData } from "next/image";

declare type ImgElementStyle = NonNullable<JSX.IntrinsicElements["img"]["style"]>;

interface Props {
  image: StaticImageData | string;
  alt: string;
  width?: string;
  height?: string;
  layout?: "fixed" | "intrinsic" | "fill" | "responsive" | undefined;
  styles?: any;
  objectFit?: ImgElementStyle["objectFit"] | undefined;
}

const CustomImage = (props: Props) => {
  const { image, alt, width, height, layout, objectFit, styles } = props;

  return (
    <div className={styles || "image-custom"}>
      <Image
        src={image}
        alt={alt}
        width={width || "270px"}
        height={height || "204px"}
        layout={layout || undefined}
        objectFit={objectFit || undefined}
      />
    </div>
  );
};

export default CustomImage;
