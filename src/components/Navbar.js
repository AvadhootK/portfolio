import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { TiSocialDribbble, TiSocialTwitter } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbarscrl z-10 fixed w-full h-[80px] flex justify-between items-center md:px-20 px-10 bg-white text-base-black text-[18px] opacity-90">
      <div className="text-base-violet text-3xl font-semibold brand">
        <a href="/" className="logo">
          Avadhoot
        </a>
      </div>

      {/* menu */}
      <ul className="navbar-nav hidden md:flex activenav">
        <li>
          <a className="hover:text-base-violet alinks" href="/#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-base-violet alinks" href="/#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-base-violet alinks" href="/#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-base-violet alinks" href="/#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="hover:text-base-violet alinks" href="/#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="hover:text-base-violet alinks" href="/#contact">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-2/5 h-screen bg-base-violet text-white flex flex-col pt-20 items-end pr-5"
        }
      >
        <li className="py-2 text-lg">
          <a href="/#">Home</a>
        </li>
        <li className="py-2 text-lg">
          <a href="/#about">About</a>
        </li>
        <li className="py-2 text-lg">
          <a href="/#skills">Skills</a>
        </li>
        <li className="py-2 text-lg">
          <a href="/#experience">Experience</a>
        </li>
        <li className="py-2 text-lg">
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li className="py-2 text-lg">
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
            {/* eslint-disable-next-line*/}
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/avadhoot-kulkarni/"
              target="_blank"
            >
              LinkedIn <AiFillLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/#"
            >
              Github <AiOutlineGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/#"
            >
              Twitter <TiSocialTwitter size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-900">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/#"
            >
              Website <TiSocialDribbble size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
