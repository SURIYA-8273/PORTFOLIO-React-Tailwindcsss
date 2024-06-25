import React from "react";
import profile from "../assets/homepage.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
const Home = () => {
  const config = {
    name: "Suriya",
    role: "Full Stack Developer",
  };
  return (
    <section
      className="flex flex-col md:flex-row  py-12 bg-primary justify-center items-center"
      id="home"
    >
      <div className="md:w-1/2 items-center flex flex-col justify-center">
        <h1 className="   text-6xl text-white font-home-font ">
          Hi
          <br />I am {config.name}
          <p className="text-2xl">
            I am a
            <span className="text-black font-bold text-3xl"> {config.role}</span>
          </p>
        </h1>
        <div className="flex py-4">
          <a href="" className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href="" className=" hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>
      <img className="w-[350px] md:w-1/3 " src={profile} alt="" />
    </section>
  );
};

export default Home;
