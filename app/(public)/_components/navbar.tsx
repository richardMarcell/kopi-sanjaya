"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer  lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-[2px]  w-[30px] rounded-lg bg-black transition-all duration-200 ${
            isOpen ? "origin-top-left rotate-45" : ""
          }`}
        ></span>
        <span
          className={`h-[2px]  w-[30px] rounded-lg bg-black transition-all duration-200 ${
            isOpen ? "scale-0" : ""
          }`}
        ></span>
        <span
          className={`h-[2px]  w-[30px] rounded-lg  bg-black transition-all duration-200 ${
            isOpen ? "origin-bottom-left -rotate-45" : ""
          }`}
        ></span>
      </div>
      <nav
        className={`absolute bg-white/95 backdrop-blur-md right-6 top-16 flex w-[250px] ${
          isOpen ? "block" : "hidden lg:flex"
        } flex-col gap-6 rounded-xl border border-gray-200 p-10 shadow-xl transition-all duration-300 lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-10 lg:rounded-none lg:border-none lg:p-0 lg:shadow-none lg:bg-transparent lg:backdrop-blur-none`}
      >
        <Link
          className="hover:font-bold hover:text-green transition-all duration-200 hover:scale-105"
          href={"#home"}
        >
          Home
        </Link>
        <Link
          className="hover:font-bold hover:text-green transition-all duration-200 hover:scale-105"
          href={"#advantages"}
        >
          Advantages
        </Link>
        <Link
          className="hover:font-bold hover:text-green transition-all duration-200 hover:scale-105"
          href={"#product"}
        >
          Product
        </Link>
        <Link
          className="px-6 py-2 bg-green text-white rounded-full hover:bg-green/90 transition-all duration-200 hover:shadow-lg hover:scale-105 font-semibold"
          href={"#contact"}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
