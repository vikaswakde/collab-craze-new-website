import Image from "next/image";
import React from "react";

const Certificate = () => {
  return (
    <div className="py-[80px] px-[16px]">
      <div className="flex flex-col max-w-[37.5rem] lg:max-w-[56.5rem] items-center my-0 mx-auto px-2 lg:flex-row lg:gap-x-5">
        <div className="w-[100%] items-center">
          <h2 className="font-semibold text-2xl md:text-3xl text-center">
            Get a Certificate to <br /> Prove Your Skill
          </h2>
          <p className="mt-5 text-sm md:text-lg  text-gray-300 text-center leading-[160%] ">
            If you successfully complete the courses, you will get officially
            certified by CollabCraze Tech. Complete the course successfully and
            stand out from the other candidates with Certification of
            Completion.
          </p>
        </div>
        <div className="w-[100%]  shadow-2xl mt-3 md:mt-5 shadow-pink-400 md:w-[80%]  lg:w-[100%] ">
          <Image
            src="/certificate.png"
            alt="certificate"
            width={100}
            height={100}
            className="w-[100%] h-fit mx-2 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
