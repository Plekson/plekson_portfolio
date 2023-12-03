import React from "react";
import CTA from "../CTA/CTA";
import HeroAnimations from "./HeroAnimations";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 flex">
      <HeroAnimations />;
      <div className="head xl:w-2/3 w-full">
        <div className="flex flex-col gap-4 h-screen justify-center">
          <div className="hello-section">
            <h3 className="text-2xl leading-none opacity-0 text-[#6ACFC7]">
              Hello,
            </h3>
            <h1 className=" opacity-0 font-bold">My name is Piotr</h1>
          </div>
          <div className="hello-section">
            <h3 className="text-2xl leading-none opacity-0 text-[#6ACFC7]">
              and I am
            </h3>
            <h1 className=" opacity-0 font-bold">
              <TypingEffect />
            </h1>
          </div>
          <div className="hello-section">
            <div className="opacity-0 pt-4">
              <CTA text="Contact" />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 h-screen justify-center xl:w-3/4"
          id="about"
        >
          <h4>
            <span className="text-[#6ACFC7] text-2xl leading-10">
              Hey there,
            </span>
            <br /> I'm Piotr, a web developer passionate about crafting visually
            appealing websites. With expertise in [mention your areas of
            specialization], I blend design and technology to create engaging
            online experiences. Let's collaborate on shaping your unique digital
            presence!
          </h4>
          <div className="xl:hidden flex justify-center items-center my-8">
            <div className="image-section rounded-full overflow-x-hidden aspect-square opacity-0 w-96">
              <img src="abdul.webp" alt="face" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 xl:flex hidden justify-center h-screen items-center sticky top-0">
        <div className="image-section rounded-full overflow-x-hidden aspect-square opacity-0">
          <img src="abdul.webp" alt="face" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
