import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Whyus from "./Whyus";
import Improve from "./Improve";
import Patience from "./Patience";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        image="heroimage.png"
        title="Develop your skills without diligence"
        desc=" A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
        btn1=" Get Started"
        btn2=" Discount"
      />
      <Whyus />
      <Improve />
      <Patience />
      <Hero
        image="heroimage2.png"
        title="Each student an share their discount code for friends"
        desc=" A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
        btn1=" Get Started"
        btn2=" Discount"
      />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
