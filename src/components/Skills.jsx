import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/tailwind.jpeg";
import javascript from "../assets/java-script.png";
import react from "../assets/physics.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/expressjs.png";
import sql from "../assets/sql.png";

const Skills = () => {
  const config = {
    skills: [
      html,
      css,
      tailwind,
      javascript,
      react,
      node,
      expressjs,
      sql,
      mongodb,
    ],
  };
  return (
    <section className="px-4 py-10 bg-primary">
      <div className=" pl-4 w-1/3 text-center">
        <h1 className="text-white text-bold text-4xl border-b-4 border-secondary-color inline-block">
          SKILLS
        </h1>
      </div>
      <div className="flex gap-7 mt-10 ml-20 flex-wrap">
        {config.skills.map((skills) => (
          <div className="border-4 bg-white border-black rounded-full w-24">
            <img className="w-[90px] h-[90px] p-4 " src={skills} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
