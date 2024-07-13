import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-400 py-2">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-2 py-3">
        <Link href="#">Logo</Link>
        <div className="hidden sm:block">
          <ul className="flex gap-x-2 items-center justify-around ">
            <li>About us</li>
            <li>Curriculm</li>
            <li>FAQs</li>
          </ul>
        </div>
        <nav className="flex gap-x-2 items-center mr-2 ">
          <Button className="mr-4">Contact Now</Button>
          <MenuIcon className="md:hidden" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
