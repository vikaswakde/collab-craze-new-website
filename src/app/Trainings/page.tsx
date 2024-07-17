import React from "react";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import Number1Section from "./components/Number1Section";
import FAQ from "./components/FAQ";
import WhyWeDifferent from "./components/WhyWeDifferent";

const Trainings = () => {
  return (
    <div>
      <div className="min-h-screen max-w-8xl bg-gradient-to-tr from-gray-500 to-gray-600 flex flex-col  ">
        <HeroSection />
        <div className="flex flex-col  items-center  justify-center">
          <InfoCards />
          <Number1Section />
          <WhyWeDifferent />
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Trainings;
