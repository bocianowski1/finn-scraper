import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-tr from-blue-900 to-blue-400 flex justify-between py-8 px-4 w-screen text-gray-200 ">
      <Link href={"/"} className=" cursor-pointer">
        <h2 className="text-2xl font-bold">Torger</h2>
      </Link>
      <ul className=" flex items-center text-gray-100 ">
        <li className=" mx-2">
          <Link
            className=" cursor-pointer text-2xl"
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
