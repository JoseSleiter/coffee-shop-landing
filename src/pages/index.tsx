import type { NextPage } from "next";
import bgTitle from "../../public/BRUSH-51.png";
import Articles from "../components/articles";
import Head from "../components/custom/head";
import Header from "../components/header";
import TitleWithImg from "../components/title-with-img";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <Head />
      <Header />
      <div>
        <TitleWithImg image={bgTitle} title={"Nuestros artículos"} />
        <div className="container" style={{ justifyContent: "center", display: "flex", alignItems: "unset" }}>
          <div className={`container containerBlue fstart`}>
            <Articles />
          </div>
        </div>
      </div>
      <footer>
        <TitleWithImg image={bgTitle} title={"Contáctanos"} />
      </footer>
    </>
  );
};

export default Home;
