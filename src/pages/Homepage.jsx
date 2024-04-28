// import { useState } from "react";
import About from "../components/About";
import MouskiNomics from "../components/MouskiNomics";
// import Nav from "../components/Nav";

import Roadmap from "../components/Roadmap";

import WhoIsMouski from "../components/WhoIsMouski";

const Homepage = () => {
  // const [activeLink, setActiveLink] = useState("home");

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };

  return (
    <div>
      <div id="about">
        <About />
      </div>
      <div id="whoismouski">
        <WhoIsMouski />
      </div>
      <div id="mouskinomics">
        <MouskiNomics />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
    </div>
  );
};

export default Homepage;
