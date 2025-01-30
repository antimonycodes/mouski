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
      <div
        id="home"
        className=" mt-[17rem] md:mt-1 flex flex-col md:flex-row md:gap-8"
      >
        <div className="flex flex-col items-center gap-2 font-bold text-black ">
          <img src="/mousk.png" alt="" className=" hidden md:block w-[10rem]" />
          <h3>We will Live on Pinksale in</h3>
          <div className="flex gap-4 text-white ">
            <div className="p-1 bg-black w-fit">
              {days} {}{" "}
            </div>
            <div className="p-1 bg-black w-fit">{hours} </div>
            <div className="p-1 bg-black w-fit">{minutes}</div>
            <div className="p-1 bg-black w-fit">{seconds}</div>
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
          <div className="flex flex-col items-center justify-center ">
            <img src="/coin1.png" alt="" className=" w-[6rem] mb-4" />
            <span className="text-5xl font-bold ">ANTMAN</span>
          </div>
          <h5 className="text-center ">Contact address:</h5>
          <div className="mx-2 ">
            <div className="w-full px-1 pt-1 pb-2 bg-black rounded-xl">
              <div className="px-4 py-2 text-center bg-white rounded ">
                <h5> 23ry25sgxw6wg6iwc6cfcc6</h5>
              </div>
            </div>
          </div>
          {/* <div className=" h-4 mt-2 mb-12 md:w-[60%] xl:bg-slate-50`">
            <audio
              src="/music.mp3"
              controls
              style={{
                minWidth: "375px",
              }}
            ></audio>
          </div> */}
          <div className="flex items-center gap-4 mt-2 ">
            <img
              src="/logo1.png"
              className=" w-[60px] md:w-[100px] md:h-[30px]"
            />
            <img
              src="/logo1.png"
              className=" w-[60px] md:w-[100px] md:h-[30px]"
            />
            <img
              src="/logo1.png"
              className=" w-[60px] md:w-[100px] md:h-[30px]"
            />
          </div>
          <Arrow />
          <div className="flex items-center px-0 ">
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
