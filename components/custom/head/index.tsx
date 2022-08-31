import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
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
  );
};

export default CustomHead;
