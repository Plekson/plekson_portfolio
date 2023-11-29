import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".trigger",
  //       start: "top 60%",
  //       end: "top top",
  //       scrub: true,
  //     },
  //   });

  //   tl.fromTo(".animate", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 });
  // }, []);

  return (
    <main className="flex flex-col gap-8">
      <section>
        <Navbar />
        <Hero />
      </section>
      {/* <section className="trigger h-screen max-w-screen flex justify-center items-center bg-black text-white">
        <h1 className="animate text-7xl">Im piotr</h1>
      </section> */}
      <section>
        <Projects />
      </section>
    </main>
  );
}
