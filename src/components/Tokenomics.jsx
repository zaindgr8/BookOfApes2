import React from "react";

const Tokenomics = () => {
  return (
    <div
      id="Tokenomics"
      className="flex flex-col relative items-center justify-start  text-color-primary-color-2  "
    >
      <div className="pt-32 text-61xl">
        <h1 className="text-inherit font-bold font-inherit inline-block  mq450:text-5xl mq925:text-21xl">
          <span>Token</span>
          <span className="text-gradient">omics</span>
        </h1>
      </div>
      <div className="rounded-xl mx-4  bg-mediumvioletred-200  border-[3px] border-gradient ">
        <div className="flex ">
          <div className="flex justify-center text-center  p-8 flex-wrap gap-3 text-white">
            <p className="">Contract Address:</p>
            <p className="  ">9wLDRqod5iLforGmu693nFiQe357tjQ7TmfhPQsHuD3p</p>
          </div>
        </div>
      </div>

      <div className="grid mq450:grid-cols-1 m-2 mq925:grid-cols-2 mq1350:grid-cols-3 mq1825:grid-cols-4 gap-8 pt-16">
        <div className="w-[320px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            Book Of Apes
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Name
          </b>
        </div>
        <div className="w-[320px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            BSC
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Network
          </b>
        </div>
        <div className="w-[320px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            18
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Decimal
          </b>
        </div>
        <div className="w-[320px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            100M
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Total Supply
          </b>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
