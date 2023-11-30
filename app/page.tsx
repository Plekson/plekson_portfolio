import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
