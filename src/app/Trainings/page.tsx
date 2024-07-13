import React from "react";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";

const Trainings = () => {
  return (
    <div>
      <div className="min-h-screen max-w-8xl bg-gradient-to-tr from-gray-500 to-gray-600">
        <HeroSection />
      </div>
      <InfoCards />
    </div>
  );
};

export default Trainings;
