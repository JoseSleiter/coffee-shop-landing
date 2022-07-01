import type { NextPage } from "next";
import Head from "next/head";
import Articles from "../components/articles";
import TitleWithImg from "../components/title-with-img";
import styles from "../styles/Home.module.css";
import bgTitle from "../public/BRUSH-51.png";

import CustomImage from "../components/custom-image";
import styles from "../styles/Home.module.css";
import heroBackground from "../public/hero.png";
import heroBackground2 from "../public/BRUSH-32.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Coffe Shop</title>
      </Head>
      <div className={styles.container + " " + styles.fstart}>
        <TitleWithImg image={bgTitle} title={"Nuestros artículos"} />
        <Articles />

      <div style={{ position: "relative", height: "450", width: "100%" }}>
        <hero className={styles.coverImage}>
          <p>LOGO</p>
          <p>El secreto de tu cocina</p>
          <CustomImage
            className={styles.coverImage}
            image={heroBackground}
            alt="heroBackground"
            width="1100"
            height="305"
            layout="fill"
          />
        </hero>
      </div>

      <div
        className="container"
        style={{ maxWidth: "1100px", justifyContent: "center", display: "flex", alignItems: "unset", margin: "0 auto" }}
      >
        <div className={styles.container + " " + styles.fstart}>
          <Articles />
        </div>
      </div>
      <footer>
        <TitleWithImg image={bgTitle} title={"Contáctanos"} />
      </footer>
    </>
  );
};

export default Home;
