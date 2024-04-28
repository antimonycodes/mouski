import { useState } from "react";
import Border from "./Border";

const Raids = () => {
  const images = [
    "/one.jpg",
    "/two.jpg",
    "/three.jpg",
    "/four.jpg",
    "/five.jpg",
    "/six.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffleImages = () => {
    // setCurrentIndex((prevIndex) => prevIndex + 1);
    let randomIndex;
    randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <>
      <div className="flex flex-col py-[10rem] items-center justify-center h-full gap-8 bg-[#3CBDB4] chewy-font ">
        <div className="">
          <h1 className="text-[4rem] font-extrabold text-center ">Raids</h1>
          <p className="pb-4 font-bold text-center ">
            Weeee raiiddd faaaaassstt
          </p>
          <div className=" w-[300px] h-full sm:w-[500px]">
            <img
              src={images[currentIndex]}
              alt=""
              className="w-full h-full rounded-lg "
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="px-4 py-2 mr-6 text-white duration-500 bg-black hover:scale-105 hover:font-medium rounded-3xl"
              onClick={shuffleImages}
            >
              Shuffle %
            </button>
            <button className="px-8 py-2 text-white bg-blue-700 rounded-3xl">
              RAID
            </button>
          </div>
        </div>
      </div>
      <Border />
    </>
  );
};

export default Raids;
