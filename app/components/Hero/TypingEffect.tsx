"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["Front-end dev", "Back-end dev", "Fullstack dev"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypingEffect;
