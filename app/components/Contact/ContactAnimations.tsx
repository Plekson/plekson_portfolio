"use client";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const ContactAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  useEffect(() => {
    const inputArray = gsap.utils.toArray(".input");

    tl.fromTo(
      ".contact__title",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      }
    );

    inputArray.forEach((input) => {
      gsap.fromTo(
        input as HTMLElement,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: input as HTMLElement,
            start: "top 90%",
          },
        }
      );
    });
  });

  return null;
};

export default ContactAnimations;
