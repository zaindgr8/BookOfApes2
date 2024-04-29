import React from "react";

const Tokenomics = () => {
  return (
    <div
      id="Tokenomics"
      className="flex flex-col relative items-center justify-start  text-color-primary-color-2  "
    >
      <div className="mq450:pt-8 mq925:pt-32 text-61xl">
        <h1 className="text-inherit font-bold font-inherit inline-block font-text-heading  mq450:text-5xl mq925:text-10xl">
          <span>Token</span>
          <span className="text-gradient">omics</span>
        </h1>
      </div>
      <div className="rounded-xl mx-4  bg-mediumvioletred-200  border-[3px] border-gradient ">
        <div className="flex ">
          <div className="flex justify-center text-center mq450:p-2 p-8 flex-wrap gap-3 text-white font-inherit">
            <p className="font-text-heading">Contract Address:</p>
            <p className="font-sans">
              9wLDRqod5iLforGmu693nFiQe357tjQ7TmfhPQsHuD3p
            </p>
            <button
              className=" bg-transparent"
              onClick={() => console.log("first")}
            >
              <img
                className="cursor-pointer"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex pt-16 gap-16 mq450:flex-col mq925:flex-col   pb-5 ">
        <div className="grid   px-10 mq450:grid-cols-1 m-2 mq925:grid-cols-2 mq1350:grid-cols-2 mq1825:grid-cols-2 gap-10 ">
          <div className="w-[250px] h-[157px] text-center text-10xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center font-text-body-2">
            <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px] ">
              Book Of Apes
            </h2>
            <b className="text-3xl inline-block w-[304px] ">Name</b>
          </div>
          <div className="w-[250px] h-[157px] text-center text-10xl text-color-text-color rounded-xl bg-mediumvioletred-200 font-text-body-2 border-solid border-gradient flex justify-center flex-col items-center">
            <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
              SOLANA
            </h2>
            <b className="text-3xl inline-block w-[304px] ">Network</b>
          </div>
          <div className="w-[250px] h-[157px] text-center text-10xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid font-text-body-2 border-gradient flex justify-center flex-col items-center">
            <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
              9
            </h2>
            <b className="text-3xl inline-block w-[304px] ">Decimal</b>
          </div>
          <div className="w-[250px] h-[157px] text-center text-10xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient font-text-body-2 flex justify-center flex-col items-center">
            <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
              420000000000
            </h2>
            <b className="text-3xl inline-block w-[304px] ">Total Supply</b>
          </div>
        </div>
        <div className=" mq450:px-12 mq925:px-12  ">
          <img
            className="w-[80%] mq450:w-[100%] mq925:w-[100%] mq1825:pt-8 mq1350:pt-8 h-auto object-contain"
            alt=""
            src="/Pie Chart.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
