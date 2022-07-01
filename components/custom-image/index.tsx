import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  width?: string;
  height?: string;
  layout?: "fixed" | "intrinsic" | "fill" | "responsive" | undefined;
  className?: string;
}

const CustomImage = (props: Props) => {
  const { image, alt, width, height, layout, className } = props;

  return (
    <div style={{ width: "100%" }}>
      <Image
        className={className}
        src={image}
        alt={alt}
        width={width || "270px"}
        height={height || "204px"}
        layout={layout || undefined}
      />
    </div>
  );
};

export default CustomImage;
