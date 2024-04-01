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
        className={`fixed bg-white right-6 top-16 flex w-[250px] ${
          isOpen ? "block" : "hidden lg:flex"
        } flex-col gap-6 rounded-md border p-10 shadow-md transition-all duration-200 lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-10 lg:rounded-none lg:border-none lg:p-0  lg:shadow-none`}
      >
        <Link className="hover:font-bold hover:text-green" href={"#home"}>
          Home
        </Link>
        <Link className="hover:font-bold hover:text-green" href={"#home"}>
          Advantages
        </Link>
        <Link className="hover:font-bold hover:text-green" href={"#product"}>
          Product
        </Link>
        <Link className="hover:font-bold hover:text-green" href={"#contact"}>
          Contact
        </Link>
      </nav>
    </>
  );
}
