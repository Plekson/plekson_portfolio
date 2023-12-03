"use client";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const ProjectsAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    const workItems = document.querySelectorAll(".project-image");
    let mm = gsap.matchMedia();

    tl.fromTo(
      ".title",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      }
    );

    workItems.forEach(function (item, index) {
      const element = item as HTMLElement;
      element.style.zIndex = String(workItems.length - index);
    });

    gsap.set(".project-image", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });

    const animation = gsap.to(".project-image:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".works",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });

    mm.add("(max-width: 1024px)", () => {
      const itemsArray = gsap.utils.toArray(".item");

      itemsArray.forEach((item) => {
        gsap.fromTo(
          item as HTMLElement,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item as HTMLElement,
              start: "top 90%",
            },
          }
        );
      });
    });
  }, []);

  return null;
};

export default ProjectsAnimations;
