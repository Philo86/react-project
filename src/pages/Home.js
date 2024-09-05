import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

export const Home = () => {
  return (
    <>
      <Header />
      <MainContent name="Home" />
      <Footer />
    </>
  );
};

export default Home;
