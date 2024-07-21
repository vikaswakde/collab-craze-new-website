"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <header className=" bg-gradient-to-r from-pink-300 to-[#A2074D] py-2 sticky top-0 z-50">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-2 py-1">
        <Link href="#">
          <Image
            src={"/collabcraze-rectangular-logo.png"}
            width="180"
            height="180"
            alt="logo"
            className="p-0"
          />
        </Link>
        <div className="hidden sm:block">
          <ul className="flex gap-x-7 items-center justify-around font-mono text-lg ">
            <Button variant={"link"}>
              <Link href={"#"} className="hover:text-blue-300 ">
                About us
              </Link>
            </Button>
            <Button variant={"link"}>
              <Link href={"#fyq"} className="hover:text-blue-300 ">
                FAQs
              </Link>
            </Button>
            {position === "Softwares" ? (
              <Link href={"/Softwares"}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link">Our Services</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-pink-400">
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                      className=""
                    >
                      <DropdownMenuRadioItem value="Software">
                        Software
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Trainings">
                        Trainings
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Link>
            ) : (
              <Link href={"/Trainings"}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link">Our Services</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-pink-400">
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                      className=""
                    >
                      <DropdownMenuRadioItem value="Softwares">
                        Softwares
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Trainings">
                        Trainings
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Link>
            )}
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
