import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Nav = ({ activeLink, setActiveLink, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevMode) => !prevMode);
  };

  const handleItemClick = (sectionId, activeLinkValue) => {
    scrollToSection(sectionId);
    setActiveLink(activeLinkValue);
  };

  return (
    <>
      <div
        className={`w-[90%] bg-white px-1 pt-1 py-2 rounded-md text-white fixed left-6 z-50 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-8 bg-black rounded chewy-font ">
          <div>
            <div className="px-4 py-1 ">
              <HiOutlineMenuAlt3
                className="text-2xl font-bold text-white cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            </div>
            <ul className="items-center hidden gap-4 px-8 py-2 md:text-[1rem]  text-[0.6rem] font-bold transition duration-500 cursor-pointer md:flex chewy-font group-hover:text-green-500">
              <li
                className={` hover:text-green-500 ${
                  activeLink === "home" ? "active navbar-Link" : "navbar-link"
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`${
                  activeLink === "about"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("about", "about")}
              >
                About
              </li>
              <li
                className={`${
                  activeLink === "whoismouski"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("whoismouski", "whoismouski")}
              >
                Who Is Mouski
              </li>
              <li
                className={`${
                  activeLink === "mouskinomics"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("mouskinomics", "mouskinomics")}
              >
                MouskiNomics
              </li>
              <li
                className={`${
                  activeLink === "roadmap"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("roadmap", "roadmap")}
              >
                Roadmap
              </li>
              <li
                className={`${
                  activeLink === "raids"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("raids", "raids")}
              >
                <Link to="/raids">RAIDS</Link>
              </li>
            </ul>
          </div>
          {/*  */}

          <div className="hidden ml-20 xl:flex ">
            <div className="flex items-center gap-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                color="#fff"
                className="mx-1 my-1"
                height="40"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: " rgb(255, 255, 255" }}
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#fff"
                className="mx-1 my-1"
                height="40"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 255, 255);" }}
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </div>
            <button className="cursor-pointer py-2  chewy-font font-bold  m-auto flex text-sm px-3  justify-center font-sans uppercase text-white  relative text-[22px] w-full mx-3 animate-pulse  text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[2px] before:-bottom-[2px] before:-left-[2px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-800 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
              Buy $Mouski
            </button>
          </div>
        </nav>
      </div>
      <div className=" absolute top-[2.7rem] left-[1.6rem]  z-50 w-[90%]">
        {/* Menu */}
        {menuOpen && (
          <div className="">
            <ul className="fixed flex flex-col items-center w-[90%] py-4 font-sans font-bold text-white bg-black rounded-md chewy-font md:hidden cursor-pointer">
              <li
                className={`pb-4 hover:text-green-500 ${
                  activeLink === "home" ? "active navbar-Link" : "navbar-link"
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`pb-4 ${
                  activeLink === "about"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("about", "about")}
              >
                About
              </li>
              <li
                className={`pb-4 ${
                  activeLink === "whoismouski"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("whoismouski", "whoismouski")}
              >
                Who Is Mouski
              </li>
              <li
                className={`pb-4 ${
                  activeLink === "mouskinomics"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("mouskinomics", "mouskinomics")}
              >
                MouskiNomics
              </li>
              <li
                className={`pb-4 ${
                  activeLink === "roadmap"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("roadmap", "roadmap")}
              >
                Roadmap
              </li>
              <li
                className={`${
                  activeLink === "raids"
                    ? "active-link text-green-500"
                    : "navbar-link hover:text-green-500"
                }`}
                onClick={() => handleItemClick("raids", "raids")}
              >
                <Link to="/raids">RAIDS</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
