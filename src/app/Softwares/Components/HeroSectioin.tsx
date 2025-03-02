import { Button } from "@/components/ui/button";
import React from "react";

// https://racxstudio.vercel.app/

const HeroSectioin = () => {
  return (
    <div>
      {" "}
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          Growing Your Business <br />
          Is Our Calling
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          We provide developers & designers using latest technologies to help
          you scale up your business.
        </p>

        <Button
          href="/project"
          type="link"
          className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
        >
          See Our Work
          <svg
            className="ml-2 w-7 h-7 text-white animate-bounce-x"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default HeroSectioin;
