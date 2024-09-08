import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home" />
        <style type="text/css">{`
        h1{
        color: red;
        }
        `}</style>
      </Helmet>
      <Header />
      <MainContent name="Home" />
      <Footer />
    </>
  );
};

export default Home;
