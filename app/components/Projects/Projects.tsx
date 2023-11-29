import React from "react";
import ProjectsAnimations from "./ProjectsAnimations";

const Projects = () => {
  return (
    <div
      className="container mx-auto px-4 min-h-screen flex flex-col items-center py-16 gap-16 relative"
      id="projects"
    >
      <ProjectsAnimations />
      <div className="flex flex-col items-center title opacity-0 absolute top-16">
        <h2>Projects</h2>
        <hr className="w-32 bg-[#6ACFC7] border-[#6ACFC7] border-2" />
      </div>

      <div className="works flex w-full">
        <div className="left-side w-1/2">
          <div className="h-screen flex items-center">
            <h3>Project uno</h3>
          </div>
          <div className="h-screen flex items-center">
            <h3>Project secondu</h3>
          </div>
          <div className="h-screen flex items-center">
            <h3>Project tri</h3>
          </div>
        </div>
        <div className="right-side w-1/2 h-screen sticky top-0 items-center flex">
          <div className="right-side-bl h-96 w-full relative">
            <div className="project-image absolute inset-0 aspect-video">
              <img
                src="ecommerce.png"
                alt="project"
                className="block aspect-video"
              />
            </div>
            <div className="project-image absolute inset-0 aspect-video">
              <img
                src="mechanic-lp.png"
                alt="project"
                className="block aspect-video"
              />
            </div>
            <div className="project-image absolute inset-0 aspect-video">
              <img
                src="ecommerce.png"
                alt="project"
                className="block aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
