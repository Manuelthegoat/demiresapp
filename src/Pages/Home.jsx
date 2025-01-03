import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import Services from "../Components/Services";
import MenuBanner from "../Components/MenuBanner";
import Events from "../Components/Events";
import Booking from "../Components/Booking";
import Partners from "../Components/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <MenuBanner />
      <Events />
      <Booking />
      {/* <Partners /> */}
    </>
  );
};

export default Home;
