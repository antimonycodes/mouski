import Border from "./Border";

const Roadmap = () => {
  return (
    <>
      <div className="w-full h-fit md:h-screen py-8 bg-[#875BF1] relative ">
        <h1 className="text-4xl font-bold text-center chewy-font">ROADMAP</h1>
        <div className=" md:flex md:items-center md:justify-center">
          <div className="top-[5rem] right-0 lg:right-[10%] flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end md:absolute ">
            <div className=" bg-black w-fit h-[170px] pt-1 px-1 pb-2 rounded-[40%]">
              <div className="w-full h-full bg-white rounded-[40%] flex flex-col justify-center items-start py-4 px-4 text-3xl font-bold chewy-font">
                <h1>PHASE</h1>
                <h1>01</h1>
              </div>
            </div>
            {/*  */}
            <div className="w-full md:w-[50%]  px-1 pt-1 pb-1 bg-black rounded-lg h-fit">
              <div className="w-full p-4 bg-white rounded-lg h-fit ">
                <ul className="px-16 text-lg list-disc font-mediun chewy-font ">
                  <li>Fairlaunch</li>
                  <li>Listing on raydium</li>
                  <li>CoinGecko Listings</li>
                  <li>1000+ Holders</li>
                  <li>Turned out to be the greatest meme coin ever</li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="top-[20rem] left-0 flex flex-col items-center justify-center md:flex-row-reverse gap-4 w md:justify-end md:absolute ">
            <div className=" bg-black w-fit h-[170px] pt-1 px-1 pb-2 rounded-[40%]">
              <div className="w-full h-full bg-white rounded-[40%]  flex flex-col justify-center items-start py-4 px-4 text-3xl font-bold chewy-font">
                <h1>PHASE</h1>
                <h1>01</h1>
              </div>
            </div>
            {/*  */}
            <div className="w-full md:w-[50%] px-1 pt-1 pb-1 bg-black rounded-lg h-fit">
              <div className="w-full p-4 bg-white rounded-lg h-fit ">
                <ul className="px-16 text-lg list-disc font-mediun chewy-font ">
                  <li>Fairlaunch</li>
                  <li>Listing on raydium</li>
                  <li>CoinGecko Listings</li>
                  <li>1000+ Holders.</li>
                  <li>Turned out to be the greatest meme coin ever</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Border />
    </>
  );
};

export default Roadmap;
