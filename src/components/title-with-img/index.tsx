import { StaticImageData } from "next/image";
import CustomImage from "../custom/image";
import styles from "./../../styles/Title-with-img.module.css";

interface Props {
  image?: StaticImageData | string;
  title?: string;
  width?: string;
  height?: string;
  imgStyles?: string;
}

const TitleWithImg: React.FC<Props> = (props: Props) => {
  const { image, title, height, width, imgStyles } = props;

  return (
    <div className={styles.bgTitle}>
      <h2>
        <CustomImage styles={imgStyles || styles.absolute} image={image || ""} height={height || "85"} width={width || "464"} alt={title || "img"} />
        {title || "insert a text"}
      </h2 >
    </div >
  );
};

export default TitleWithImg;
