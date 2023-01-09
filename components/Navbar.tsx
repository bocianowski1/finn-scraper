import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="my-8">
      <div
        className="bg-neutral-100 shadow-md
        border border-t-stone-500
      flex justify-between py-8 px-4 w-1000
      fixed -top-96 lg:-top-[22rem] -left-10 
      -rotate-3 z-10 h-96 -translate-y-72"
      />

      <nav
        className="
      flex justify-between pt-6 md:py-8 px-4 w-screen
      fixed left-0 top-0 z-20"
      >
        <Link href={"/"} className="cursor-pointer flex flex-col">
          <h1 className="text-left text-3xl md:text-4xl font-bold pt-2 px-2 mx-4 ">
            Fake Finn
          </h1>
          <h3 className="font-thin mx-4 px-2 text-xs md:text-lg">
            Norges nestbeste leiemarked.
          </h3>
        </Link>

        <ul className="flex items-center mr-4 px-2 lg:px-8 lg:pb-8">
          <li className="p-2 transition ease-in-out hover:-translate-y-0.5 duration-300 mx-1">
            <Link
              className="cursor-pointer text-2xl"
              target={"_blank"}
              href={"https://www.linkedin.com/in/torger-bocianowski/"}
            >
              <FaLinkedin />
            </Link>
          </li>
          <li className="p-2 transition ease-in-out hover:-translate-y-0.5 duration-300 mx-1">
            <Link
              className=" cursor-pointer text-2xl"
              target={"_blank"}
              href={"https://github.com/bocianowski1"}
            >
              <FaGithub />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
