// import { useEffect, useState } from "react";
// import Nav from "./Nav";
import Hero from "./Hero";
import Border from "./Border";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative w-full h-full py-4 chewy-font"
        style={{
          background:
            "linear-gradient(90deg, rgba(63,186,184,1) 46%, rgba(32,225,159,1) 100%)",
        }}
      >
        {/* <Nav /> */}
        <div className=" absolute left-0 top-[4rem] -z-1 md:hidden">
          <img src="/mousk.png" alt="mouski" className=" w-[15rem]" />
        </div>
        {/*  */}
        <Hero />
      </div>
      <Border />
    </>
  );
};

export default About;
