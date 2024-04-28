// import Svg from "./Svg";

import Border from "./Border";

const MouskiNomics = () => {
  return (
    <>
      <div
        className="relative w-full h-full py-12 bg-[#8065EC] "
        // style={{
        //   background: "",
        // }}
      >
        <div className="absolute top-0 -z-0 ">
          <img src="/hanging.png" alt="" width="100px" className="" />
        </div>
        <h1 className="text-3xl font-bold leading-4 text-center chewy-font">
          MOUSKINOMICS
        </h1>

        <div className="flex flex-col items-center justify-center mx-1 lg:flex-row">
          <div className="z-50 w-full mx-2 mt-2 ">
            <div className="w-full px-[2px] pt-[2px] pb-[0.3rem] md:mx-auto md:w-fit bg-black rounded-lg ">
              <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-2 py-6 bg-white rounded-lg place-items-center md:grid-cols-2">
                <div className="bg-black rounded-lg px-[2px] pt-[2px] pb-[0.3rem] mx-4">
                  <div
                    className="w-full h-full px-8 font-bold text-center text-white rounded-lg"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(147,76,250,1) 16%, rgba(48,204,172,1) 93%)",
                    }}
                  >
                    <h1>CURRENT SUPPLY</h1>
                    <h1>6,437,999.05</h1>
                  </div>
                </div>
                {/*  */}
                <div className="bg-black rounded-lg px-[2px] pt-[2px] pb-[0.3rem] mx-4">
                  <div
                    className="w-full h-full px-8 font-bold text-center text-white rounded-lg"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(147,76,250,1) 16%, rgba(48,204,172,1) 93%)",
                    }}
                  >
                    <h1>51% LP</h1>
                    <h1>PRESALE</h1>
                  </div>
                </div>
                {/*  */}
                <div className="bg-black rounded-lg px-[2px] pt-[2px] pb-[0.3rem] mx-4">
                  <div
                    className="w-full h-full px-8 font-bold text-center text-white rounded-lg"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(147,76,250,1) 16%, rgba(48,204,172,1) 93%)",
                    }}
                  >
                    <h1>LP LOCK</h1>
                    <h1>AT PINKSALE</h1>
                  </div>
                </div>
                {/*  */}
                <div className="bg-black rounded-lg px-[2px] pt-[2px] pb-[0.3rem] mx-4">
                  <div
                    className="w-full h-full px-8 font-bold text-center text-white rounded-lg"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(147,76,250,1) 16%, rgba(48,204,172,1) 93%)",
                    }}
                  >
                    <h1>OWNERSHIP</h1>
                    <h1>REVOLKED</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-center h-full px-4 py-5 w-fit ">
            <div className="w-[200px] h-full shadow-xl disco-animation lg:mt-6 ">
              {/* <Svg /> */}
              <img src="/solana.jpg" alt="" className="rounded-lg " />
            </div>
            <h1 className="text-2xl italic font-medium text-white ">SOLANA</h1>
          </div>
        </div>
      </div>
      <Border />
      {/* <div className="bg-white px-5 py-4 font-sans  text-3xl  border-black border-r-[3px] border-t-[3px] border-l-[3px] border-b-[6px] pointer p-4   aspect-square w-[80px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
        PHASE 01
      </div> */}
    </>
  );
};

export default MouskiNomics;
