import React from "react";
import ProjectsAnimations from "./ProjectsAnimations";
import CTA from "../CTA/CTA";

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

      <div className="works flex w-full sm:my-0 my-8">
        <div className="left-side lg:w-1/2 w-full lg:pr-8 p-4">
          <div className="item h-screen flex flex-col justify-center gap-4 items-center">
            <div className="flex flex-col items-center gap-4">
              <h3>Project uno</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                earum possimus nostrum at sequi quas laborum laboriosam alias
                optio consectetur repellendus beatae est nemo illum labore,
                velit aperiam iusto illo nulla. Qui illum voluptatum quam
                maiores ducimus consequatur facilis necessitatibus!
              </p>
              <CTA text="Code" />
            </div>
            <div className="item aspect-video pt-4 w-full lg:hidden">
              <img
                src="ecommerce.png"
                alt="project"
                className="block aspect-video"
              />
            </div>
          </div>
          <div className="item h-screen flex flex-col justify-center gap-4 items-start">
            <div className="flex flex-col items-center gap-4">
              <h3>Project secundu</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                earum possimus nostrum at sequi quas laborum laboriosam alias
                optio consectetur repellendus beatae est nemo illum labore,
                velit aperiam iusto illo nulla. Qui illum voluptatum quam
                maiores ducimus consequatur facilis necessitatibus!
              </p>
              <CTA text="Code" />
            </div>
            <div className="item aspect-video pt-4 w-full lg:hidden">
              <img
                src="mechanic-lp.png"
                alt="project"
                className="block aspect-video"
              />
            </div>
          </div>
          <div className="item h-screen flex flex-col justify-center gap-4 items-start">
            <div className="flex flex-col items-center gap-4">
              <h3>Project tri</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                earum possimus nostrum at sequi quas laborum laboriosam alias
                optio consectetur repellendus beatae est nemo illum labore,
                velit aperiam iusto illo nulla. Qui illum voluptatum quam
                maiores ducimus consequatur facilis necessitatibus!
              </p>
              <CTA text="Code" />
            </div>
            <div className="item aspect-video pt-4 w-full lg:hidden">
              <img
                src="ecommerce.png"
                alt="project"
                className="block aspect-video"
              />
            </div>
          </div>
        </div>
        <div className="right-side w-1/2 h-screen sticky top-0 items-center justify-center lg:flex hidden">
          <div className="right-side-bl h-[279px] w-full relative hover:scale-105 duration-200">
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
