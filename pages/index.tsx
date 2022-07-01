import type { NextPage } from "next";
import Head from "next/head";
import Articles from "../components/articles";
import TitleWithImg from "../components/title-with-img";
import styles from "../styles/Home.module.css";
import bgTitle from "../public/BRUSH-51.png";

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
      </div>
      <footer>
        <TitleWithImg image={bgTitle} title={"Contáctanos"} />
      </footer>
    </>
  );
};

export default Home;
