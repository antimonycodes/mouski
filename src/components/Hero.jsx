import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [daysLeftInMonth, setDaysLeftInMonth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      const daysLeft = Math.ceil((endOfMonth - now) / (1000 * 60 * 60 * 24));
      setDaysLeftInMonth(daysLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = daysLeftInMonth.toString().padStart(2, "0");
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  return (
    <>
      <div className=" mt-[17rem] md:mt-1 flex flex-col md:flex-row md:gap-8">
        <div className=" text-black font-bold flex flex-col  items-center gap-2">
          <img
            src="/mousk.png"
            alt=""
            className=" hidden md:block w-[10rem]  "
          />
          <h3>We will Live on Pinksale in</h3>
          <div className=" text-white flex gap-4 ">
            <div className=" bg-black w-fit p-1">
              {days} {}{" "}
            </div>
            <div className=" bg-black w-fit p-1">{hours} </div>
            <div className=" bg-black w-fit p-1">{minutes}</div>
            <div className=" bg-black w-fit p-1">{seconds}</div>
          </div>
          <div
            className=" px-4 py-2 rounded-3xl bouncing-animation text-white text-[10px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(91,33,182,1) 47%, rgba(39,121,216,1) 100%)",
            }}
          >
            <h3>JOIN FAIRLAUNCH ON PINKSALE</h3>
          </div>
        </div>
        {/*  */}
        <div className=" basis-[60%] flex flex-col justify-center items-center">
          <div className=" flex items-center justify-center">
            <img src="/coin1.png" alt="" className=" w-[6rem] mb-4" />
            <span className=" text-5xl font-bold">Mouski</span>
          </div>
          <h5 className=" text-center">Contact address:</h5>
          <div className=" bg-black w-full px-1 pt-1 pb-2 rounded-xl">
            <div className=" bg-white rounded px-12 py-2 text-center">
              <h5> 23ry25sgxw6wg6iwc6cfcc6</h5>
            </div>
          </div>
          {/* <div className=" w-full h-4 mt-2">
            <audio src="/music.mp3" controls></audio>
          </div> */}
          <div className="  flex items-center gap-4 mt-2">
            <img
              src="/logo1.png"
              className=" w-[80px] md:w-[100px] md:h-[30px]"
            />
            <img
              src="/logo1.png"
              className=" w-[80px] md:w-[100px] md:h-[30px]"
            />
            <img
              src="/logo1.png"
              className=" w-[80px] md:w-[100px] md:h-[30px]"
            />
          </div>
          <Arrow />
          <div className=" flex items-center px-0">
            <span>
              <img src="/push.png" alt="" className=" w-[6rem]" />
            </span>
            <span
              className="w-[15rem] h-6 border-2 border-black rounded-xl"
              style={{
                background:
                  " linear-gradient(90deg, rgba(147,78,250,1) 37%, rgba(31,226,158,1) 100%)",
              }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
