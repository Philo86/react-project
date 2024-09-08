import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

export const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="CSS" />
      </Helmet>
      <Header />
      <MainContent name="CSS" />
      <Footer />
    </>
  );
};

export default Css;
