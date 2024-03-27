import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className=" w-[90%] bg-white ml-7 px-1 pt-1 py-2 rounded-md text-white fixed left-1 z-50 ">
        <nav className=" bg-black rounded flex items-center ">
          <div className=" px-8 py-2 ">
            <HiOutlineMenuAlt3
              className=" text-2xl text-white font-bold cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          </div>
          <ul className="items-center gap-4 hidden md:flex chewy-font py-2">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Who Is Mouski</li>
            <li className="">MouskiNomics</li>
            <li className="">Roadmap</li>
            <li>RAIDS</li>
          </ul>
        </nav>
      </div>
      <div className=" absolute top-[4.3rem] left-[2rem]  z-50 w-[90%]">
        {/* Menu */}
        {menuOpen && (
          <div className="">
            <ul className="chewy-font bg-black py-4 text-white flex flex-col items-center rounded-md font-sans font-bold">
              <li className="pb-4">Home</li>
              <li className="pb-4">About</li>
              <li className="pb-4">Who Is Mouski</li>
              <li className="pb-4">MouskiNomics</li>
              <li className="pb-4">Roadmap</li>
              <li>RAIDS</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
