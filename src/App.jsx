import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Raids from "./components/Raids";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <div className="absolute z-[999] top-2">
        <Nav
          activeLink={activeLink}
          setActiveLink={onUpdateActiveLink}
          scrollToSection={scrollToSection}
        />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/raids" element={<Raids />} />
      </Routes>
    </>
  );
}

export default App;
