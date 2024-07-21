import React from "react";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import Number1Section from "./components/Number1Section";
import FAQ from "./components/FAQ";
import WhyWeDifferent from "./components/WhyWeDifferent";
import OppAfterCourse from "./components/OppAfterCourse";
import Certificate from "./components/Certificate";
import ContactUs from "./components/ContactUs";
// #FDDAF3

const Trainings = () => {
  return (
    <div>
      <div className="min-h-screen max-w-8xl bg-gradient-to-tr from-gray-400 to-gray-500 flex flex-col  ">
        <HeroSection />
        <div className="flex flex-col  items-center  justify-center max-w-8xl">
          <InfoCards />
          <Number1Section />
          <WhyWeDifferent />
          <OppAfterCourse />
          <Certificate />
          <FAQ />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Trainings;
