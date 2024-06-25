import React from "react";
import aboutImage from "../assets/aboutpage.png";

const Aboutpage = () => {
  const config = {
    line1:
      "Hi,I am Suriya.I am a Full stack developer.I built beautiful websites with react js and tailwind css.",
    line2: "I am interested in full stack development in both",
    line3: "Web and App",
  };
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary text-white px-5 py-10 "
      id="about">
      <div className="md:w-1/2 px-2 py-5">
        <img src={aboutImage} alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-5 font-bold border-b-4 border-primary-border ">
          ABOUT ME
        </h1>
        <p className="text-2xl text-center">{config.line1}</p>
        <p className="text-2xl text-center mt-5">
          {config.line2}
          <br />{" "}
          <span className="text-4xl text-white font-bold ">{config.line3}</span>
        </p>
      </div>
    </section>
  );
};

export default Aboutpage;
