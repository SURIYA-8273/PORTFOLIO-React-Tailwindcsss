import React from "react";
import project1 from "../assets/portfolio.png";
const Projects = () => {
  const config = {
    projects: [
      {
        image: project1,
        name: "This is my Portfolio Website",
        link: "https://github.com/SURIYA-8273/PORTFOLIO-React-Tailwindcsss",
        live: "",
      },
    ],
  };
  return (
    <section className="bg-primary py-10 flex flex-col " id="project">
      <div className=" pl-4 w-1/3 text-center">
        <h1 className="text-white text-bold text-4xl border-b-8 border-secondary-color inline-block">
          PROJECT
        </h1>
      </div>
      <div className="flex  flex-col md:flex-row px-2 py-10 .project-image justify-center items-center flex-wrap gap-6">
        {config.projects.map((project) => (
          <div className="relative  ">
            <img
              className="project-image border-2"
              src={project.image}
              alt=""
            />
            <div className="image-text flex flex-col justify-center items-center">
              <p className=" text-white  break-words  px-5 py-10  ">
                {project.name}
              </p>
              <div className="flex gap-3">
                <a href={project.link} className="btn">
                  View code
                </a>
                <a href={project.live} className="btn">
                  View live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
