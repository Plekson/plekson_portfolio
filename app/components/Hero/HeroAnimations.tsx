"use client";

import { useEffect } from "react";
import gsap from "gsap";

const HeroAnimations = () => {
  useEffect(() => {
    const tlLeft = gsap.timeline();
    const tlRight = gsap.timeline();

    tlLeft.fromTo(
      ".hello-section > *",
      { x: -40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    tlRight.fromTo(
      ".image-section",
      { x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  return null;
};

export default HeroAnimations;
