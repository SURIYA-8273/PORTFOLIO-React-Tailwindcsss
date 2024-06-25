import { IoMenu } from "react-icons/io5";
import {useState} from 'react'
const Header = () => {
    const[toggleMenu,setToggleMenu]=useState(false);
  return (
    <div>
      <header className="flex justify-between px-6 pt-5 bg-primary ">
        <a href="#" className="font-bold text-black text-4xl">
          PORTFOLIO
        </a>
        <nav className="hidden md:block">
          <ul className="flex text-white">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <nav className="block md:hidden ">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav   ">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            </ul>
          </nav>
        )}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden text-2xl z-10"
        >
          <IoMenu className="text-white" />
        </button>
      </header>
    </div>
  );
};

export default Header;
