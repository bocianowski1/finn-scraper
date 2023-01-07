import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="bg-gray-100 shadow-md
      flex justify-between py-8 px-4 w-screen
      fixed left-0 top-0 z-10"
    >
      <Link href={"/"} className=" cursor-pointer">
        <h1 className="text-left text-4xl font-semibold p-2 mx-4">
          Fake Finn xD
        </h1>
      </Link>
      <ul className="flex items-center mx-4">
        {/* <li className="mx-2">
          <Link
            className="cursor-pointer text-2xl"
            target={"_blank"}
            href={"/test"}
          >
            test
          </Link>
        </li> */}
        <li className=" mx-2">
          <Link
            className="cursor-pointer text-2xl"
            target={"_blank"}
            href={"https://www.linkedin.com/in/torger-bocianowski/"}
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className=" mx-2">
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
  );
};

export default Navbar;
