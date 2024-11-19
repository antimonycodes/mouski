import Ants from "./Ants";

import { useEffect, useRef } from "react";
import MovingImage from "./MovingImage";
import Border from "./Border";

const WhoIsMouski = () => {
  const movingImagesRef = useRef([]);

  // Function to initialize moving images
  const initializeMovingImages = () => {
    movingImagesRef.current = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 5 + 1, // Random speed between 1 and 5
    }));
  };

  useEffect(() => {
    initializeMovingImages(); // Initialize moving images on component mount
  }, []);

  return (
    <>
      <div className=" w-full h-full bg-[#3CBDB4] px-4 py-8 grid grid-cols-1 lg:grid-cols-2 items-center md:px-8">
        <div>
          {[...Array(10)].map((_, index) => (
            <MovingImage key={index} />
          ))}
        </div>
        <div>
          {movingImagesRef.current.map((image, index) => (
            <MovingImage
              key={index}
              x={image.x}
              y={image.y}
              speed={image.speed}
              applyAnimation={true} // Pass a prop to indicate whether to apply animation
              onUpdate={(x, y) => {
                movingImagesRef.current[index] = {
                  ...movingImagesRef.current[index],
                  x,
                  y,
                };
              }}
            />
          ))}
        </div>

        <div className="w-full px-1 pt-1 pb-1 bg-black rounded-lg h-fit ">
          <div className="w-full p-4 bg-white rounded-lg h-fit ">
            <h1 className="text-6xl font-bold text-center chewy-font ">
              What is Antman
            </h1>
            <p className="mt-3 font-bold text-center ">
              Antman, one of the deadliest mosquitoes in the world, is mainly
              found in the Amazon rainforest. Its mission is to conquer the meme
              world by biting and defeating all other meme coins, making them
              obsolete. It's Mouski's turn to soar to the moon, as trends like
              <strong className="text-lg text-red-700 ">Doge</strong>,
              <strong className="text-lg text-red-700 ">Pepe</strong>,
              <strong className="text-lg text-red-700 ">Shiba</strong>
              {", "}
              <strong className="text-lg text-red-700 ">WIF</strong>
              {", "}
              <strong className="text-lg text-red-700 ">SLERF</strong>
              {"and "}
              <strong className="text-lg text-red-700 ">PENG</strong>
              are fading away, paving the way for Mouski to reach new heights in
              the meme world.
            </p>
          </div>
        </div>
        {/*  */}
        <div>
          <img src="/bath.png" alt="" className=" md:w-[30rem] mx-auto" />
        </div>
        {/* <div className="w-full h-screen ">
          <Ants />
        </div> */}
      </div>
      <div className="w-full h-1 bg-black "></div>
      <Border />
    </>
  );
};

export default WhoIsMouski;
