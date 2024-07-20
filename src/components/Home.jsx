import React from "react";

import pic from "../../public/profile_picture.jpg"

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome to My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold"> Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-base text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, accusantium nam ipsa quas vero nemo magnam.
              Reprehenderit quasi impedit rerum tempore ab, nisi iusto
              dignissimos ratione quidem, magni enim quisquam. Quas quae
              corrupti exercitationem sit rem tempore! Repudiandae sit rerum
              officiis reiciendis minus ipsam magni fugit commodi consequuntur,
              magnam ea! Cum voluptas deleniti blanditiis error est sunt
              voluptate recusandae veniam?
            </p>
            <br />
            {/* Social media item */}
            <div className="flex flex-col md:flex-row justify-between  space-y-4 text-center items-center">
              <div className="space-y-3">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-3 ">
                  <li>
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaFacebook className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <a href="https://github.com/shubhamrajj01" target="_blank">
                        <FaGithubSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shubhamraj001/" target="blank">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold">Curently Working on</h1>
                <ul className="flex space-x-5 text-xl ">
                  <li>
                    <FaReact className="hover:scale-110 cursor-pointer text-xl md:text-3xl duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <SiSpringboot className="hover:scale-110 cursor-pointer text-xl md:text-3xl duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaJava className="hover:scale-110 cursor-pointer text-xl md:text-3xl duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full md:h-[450px] md:w-[450px]" alt="" />
          </div>
        </div>
      </div>
      <hr />            
    </>
  );
}

export default Home;
