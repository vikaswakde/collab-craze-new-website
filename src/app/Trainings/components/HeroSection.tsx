import { Button, buttonVariants } from "@/components/ui/button";
import { TicketCheckIcon } from "lucide-react";
import { Dangrek } from "next/font/google";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col px-10 mx-auto pt-16">
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">
          Learn with CollabCraze, <span className="px-7">Launch Your </span>{" "}
          Exciting Tech Career
        </h1>
      </div>
      <ul className="pt-8 flex flex-col items-center gap-y-3">
        <li>100% Offline, Regular Clases</li>
        <li>2 Sessions/day</li>
        <li>Learn from Best</li>
      </ul>
      <div className="flex flex-col items-center pt-8">
        <p>👇Join Today👇</p>
        <span className="text-gray-400 text-xs pt-2">
          <span>100+ Students Enrolled</span>
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Link href={"#InfoCards"}>
          <Button variant="destructive" className="mt-10 mx-10  ">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
