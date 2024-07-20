import { Instagram, LinkedinIcon, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 px-4 md:mx-10">
      <div className="flex items-center justify-between mt-8 md:mx-7">
        <Link href={"/"}>
          <Image
            src="/collabcraze-rectangular-logo.png"
            height={50}
            width={100}
            alt="logo"
          />
        </Link>
        <ul className="flex items-center gap-x-4">
          <li>
            <Instagram />
          </li>
          <li>
            <Youtube />
          </li>
          <li>
            <LinkedinIcon />
          </li>
        </ul>
      </div>
      <hr className="border-b mt-8 border-gray-500" />
      <div className="flex flex-col gap-y-8">
        <address className="text-sm pt-8 text-gray-200 leading-6">
          address Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minus accusantium similique doloribus quasi eius eos ipsum nemo hic.
          Qui nihil cupiditate unde.
        </address>
        <span className="pr-10 text-xs text-gray-300">
          Copyright &copy;2024 COLLABCRAZE PVT LTD. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
