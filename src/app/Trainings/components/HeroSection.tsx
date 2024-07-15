import { Button, buttonVariants } from "@/components/ui/button";
import { CircleCheck, TicketCheckIcon } from "lucide-react";
import { Dangrek } from "next/font/google";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex  lg:h-[39rem] my-10">
      <div className="h-full w-full bg-cover blur-[3px] absolute  z-10 overflow-hidden">
        <video
          className="object-cover w-full h-full blur-[1px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/videos/horizontal-coding-keyboard.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="bg-[url('/videos/vertical-coding-keyboard.gif')] h-full w-full bg-cover blur-[1px] absolute z-10 md:hidden"></div>
      <div className="flex flex-col px-10 mx-auto py-20 pt-16 items-center relative z-30 md:w-[30rem] lg:w-[50rem]  ">
        <div className="flex flex-col text-center w-[15rem] md:w-[30rem] lg:w-[40rem]">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Learn with CollabCraze,{" "}
            <span className="md:block "> Launch Your </span>
          </h1>
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Global Tech Career
          </h1>
        </div>
        <ul className="pt-8 flex flex-col items-center gap-y-3 lg:flex-row lg:gap-x-4 lg:text-lg ">
          <li className="flex items-center justify-between gap-x-1">
            <CircleCheck className="h-5 " />
            <span>100% Offline, Regular class</span>
          </li>
          <li className="flex items-center justify-between gap-x-1">
            <CircleCheck className="h-5 " />
            <span>2 Sessions/day Live</span>
          </li>
          <li className="flex items-center justify-between gap-x-1">
            <CircleCheck className="h-5 " />
            <span>Learn by Best</span>
          </li>
        </ul>
        <div className="flex flex-col items-center pt-9 lg:text-xl">
          <p>👇Join Today👇</p>
          <span className="text-gray-400 text-xs lg:text-sm pt-1">
            <span>100+ Students Enrolled</span>
          </span>
        </div>
        <div className="flex justify-center items-center pt-5 w-">
          <Link href={"#InfoCards"} className="">
            <Button
              variant="ccTheme"
              className=" w-[10rem] lg:w-[15rem] lg:h-[4rem] lg:rounded-2xl text-center rounded-xl font-bold text-lg "
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
