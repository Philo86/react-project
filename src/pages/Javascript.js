import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

export const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Page</title>
        <meta name="description" content="JavaScript" />
      </Helmet>
      <Header />
      <MainContent name="JS" />
      <Footer />
    </>
  );
};

export default Javascript;
