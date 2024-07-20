import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

import pic from "../../public/photo.avif";

import {Link} from "react-scroll"


function Navbar() {
  const [menu, setMenu] = useState(true);
  function updateNavbar() {
    setMenu(!menu);
  }

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl c *:ontainer mx-auto px-4 md:px-20 h-16 shadow-md fixed left-0 right-0 top-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={pic}
              className="h-12 w-12 rounded-full"
              alt="navbar picture"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Shubha<span className="text-green-500 text-2xl">m</span>
              <p className="text-base">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link 
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={70}
                    activeClass="active"
                  >
                  {text}
                  </Link>
                  
                </li>
              ))}
            </ul>
            <div onClick={updateNavbar} className="md:hidden">
              {menu ? <IoMenu /> : <AiOutlineClose />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {!menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col justify-center items-center h-screen space-y-3 text-xl ">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                >
                  <Link 
                    onClick={updateNavbar}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
