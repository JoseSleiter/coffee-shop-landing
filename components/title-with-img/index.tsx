import { StaticImageData } from "next/image";
import React from "react";
import CustomImage from "../custom-image";
import styles from "./title-with-img.module.css";

interface Props {
  image?: StaticImageData | string;
  title?: string;
}

const TitleWithImg = (props: Props) => {
  const { image, title } = props;

  return (
    <div className={styles.bgTitle}>
      <h2>
        <CustomImage styles={styles.absolute} image={image || "x"} height="85" width="464" alt={title || "img"} />
        {title || "insert a text"}
      </h2>
    </div>
  );
};

export default TitleWithImg;
