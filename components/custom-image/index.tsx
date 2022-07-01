import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  width?: string;
  height?: string;
}

const CustomImage = (props: Props) => {
  const { image, alt, width, height } = props;

  return (
    <div style={{ width: "100%" }}>
      <Image src={image} alt={alt} width={width || "270px"} height={height || "204px"} />
    </div>
  );
};

export default CustomImage;
