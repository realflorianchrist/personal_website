"use client";
import { useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Portfolio from "@/app/components/Portfolio";

export default function Home() {
  const wrapperRef = useRef(null);

  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="wrapper" ref={wrapperRef}>
        <div id="hero" className="z-10">
          <Hero scrollContainer={wrapperRef} />
        </div>
        <div id="portfolio" className="relative z-30 bg-primary mt-[-2px]">
          <Portfolio />
        </div>
        <div id="experience" className="relative z-30 bg-primary">
          <Experience />
        </div>
        <div id="contact" className="relative z-30 bg-primary">
          {/*<Contact />*/}
        </div>
      </div>
    </div>
  );
}