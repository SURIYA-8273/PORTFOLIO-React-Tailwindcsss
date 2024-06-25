import React from "react";
import Image from "../assets/resume.png";
import ResumePdf from "../assets/suriya.pdf";

const Resume = () => {
  return (
    <section
      className="flex flex-col md:flex-row bg-primary text-white px-5 py-7 "
      id="resume"
    >
      <div className="md:w-1/2 px-2 py-5 flex justify-center">
        <img className="w-[500px]" src={Image} alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center ">
        <h1 className="text-4xl mb-10 font-bold border-b-4 border-secondary-color ">
          RESUME
        </h1>
        <p className="text-2xl text-center leading-10  ">
          You can view my Resume{" "}
          <a className="btn2" href={ResumePdf} download="ResumePdf">
            Download
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
