import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  width?: string;
  height?: string;
  styles?: any;
}

const CustomImage = (props: Props) => {
  const { image, alt, width, height, styles } = props;

  return (
    <div className={styles || "image-custom"}>
      <Image src={image} alt={alt} width={width || "270px"} height={height || "204px"} />
    </div>
  );
};

export default CustomImage;
