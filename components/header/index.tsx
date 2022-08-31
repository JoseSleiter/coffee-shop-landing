import React from "react";
import TitleWithImg from "../title-with-img";
import styles from "./header.module.css";
import bgTitle from "../../public/BRUSH-32.png";

import CustomImage from "../custom/image";
import heroBackground from "../../public/hero.png";

import logo from "../../public/Logo.png";
import icon1 from "../../public/Group-596.png";
import icon2 from "../../public/Group-597.png";
import icon3 from "../../public/Group-598.png";

// import heroBackground2 from "../../public/BRUSH-32.png";
const CustomHead = () => {
  return (
    <>
      <div
        className={styles.container}
        // style={{ position: "relative", height: "750px", width: "100%", maxHeight: "720px" }}
      >
        <div className={styles.containerHeader}>
          <div className={styles.navbar}>
            <div className={styles.socialnetwork}>
              <a
                href="https://www.linkedin.com/in/jose-sleiter-rios-905447165/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomImage styles={styles.icons} image={icon2} alt="icon2" width="62" height="62" />
              </a>
              <a
                href="https://www.linkedin.com/in/jose-sleiter-rios-905447165/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomImage styles={styles.icons} image={icon3} alt="icon3" width="62" height="62" />
              </a>
              <a
                href="https://www.linkedin.com/in/jose-sleiter-rios-905447165/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomImage styles={styles.icons} image={icon1} alt="icon1" width="62" height="62" />
              </a>
            </div>
            <CustomImage styles={styles.logo} image={logo} alt="logo" width="150" height="90" />{" "}
          </div>
          <div className="titlePage">
            <TitleWithImg image={bgTitle} title={"El secreto de tu cocina"} />
          </div>
          {/* <CustomImage styles={styles.coverImage} image={heroBackground} alt="heroBackground" layout="responsive" /> */}
        </div>
      </div>
    </>
  );
};

export default CustomHead;
