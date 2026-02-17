import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSellers from "../Components/BestSeller.jsx";
import OurPolicy from "../Components/OurPolicy.jsx";
import NewsLetterBox from "../Components/NewsLetterBox.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
