import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-pink-500 to-[#A2074D] py-2 sticky top-0 z-50">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-2 py-3">
        <Link href="#">
          <Image
            src={"/collabcraze-rectangular-logo.png"}
            width="100"
            height="50"
            alt="logo"
          />
        </Link>
        <div className="hidden sm:block">
          <ul className="flex gap-x-7 items-center justify-around font-mono text-lg ">
            <Link href={"#"} className="hover:text-blue-300 ">
              About us
            </Link>
            <Link href={"#"} className="hover:text-blue-300 ">
              Curriculm
            </Link>
            <Link href={"#"} className="hover:text-blue-300 ">
              FAQs
            </Link>
          </ul>
        </div>
        <nav className="flex gap-x-2 items-center mr-2 ">
          <Button className="mr-4 bg-pink-400">Contact Now</Button>
          <MenuIcon className="md:hidden" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
