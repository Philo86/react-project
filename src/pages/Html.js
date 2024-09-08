import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

export const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTML" />
      </Helmet>
      <Header />
      <MainContent name="HTML" />
      <Footer />
    </>
  );
};

export default Html;
