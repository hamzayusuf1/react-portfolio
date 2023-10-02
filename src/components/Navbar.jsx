import React, { useState, useContext } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PortContext } from "../App";
import IMG from "../assets/logo.svg";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  const { nav, setNav } = useContext(PortContext);

  return (
    <>
      <div className="w-full flex justify-between items-center h-fit text-gray-200 bg-backgroundBlue ">
        <div className="flex justify-between w-full">
          <div className="sm:px-5">
            <h3 className="initials text-3xl">
              <a href="/">
                <img className="w-40" src={IMG} alt="" />
              </a>
            </h3>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex mt-10">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer font-medium px-3 hover:scale-110 duration-150"
              >
                <a href={link.link}>{link.link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger menu */}
        <div
          className="md:hidden z-10 px-4 hover:transform hover:scale-125 hover:cursor-pointer transition-all 0.2s"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        {/* Mobile Menu */}
        <div>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 h-full w-full bg-[#284672] flex flex-col justify-center items-center"
            }
          >
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer font-medium py-5 text-3xl hover:scale-110 duration-150 z-11"
              >
                <a href={`/${link.link}`}>{link.link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social media */}
        <div className="flex fixed flex-col left-0 top-[35%] hidden lg:flex">
          <ul>
            <li className="w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300 mb-2 cursor-pointer">
              <a
                className="flex justify-between items-center w-full text-gray-400"
                href="https://www.linkedin.com/in/hamza-yusuf/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[55px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 mb-2 cursor-pointer">
              <a
                className="flex justify-between items-center w-full text-gray-400"
                href="mailto:hamzayusuf26@outlook.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[55px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-mainRed mb-2 cursor-pointer">
              <a
                className="flex justify-between items-center w-full text-gray-400"
                href="https://github.com/hamzayusuf1"
              >
                Github <FaGithub size={30} />
              </a>
            </li>

            <li className="w-[160px] h-[55px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-200 mb-2 cursor-pointer">
              <a
                className="flex justify-between items-center w-full text-gray-400"
                href="https://docs.google.com/document/d/1Ac-lnC2LEbrH9oXJMZ6OwEDtFrlUtdziEjLw5XOoPsM/edit?usp=sharing"
              >
                CV <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
