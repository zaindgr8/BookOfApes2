import React from "react";

const Tokenomics = () => {
  return (
    <div className="flex flex-col relative items-center justify-start text-61xl text-color-primary-color-2 font-text-heading bg-container-tokenomics ">
      <div className="pt-32">
        <h1 className="text-inherit font-bold font-inherit inline-block z-[2] mq450:text-5xl mq925:text-21xl">
          <span>Token</span>
          <span className="text-gradient">omics</span>
        </h1>
      </div>
      <div className="rounded-xl bg-mediumvioletred-200 box-border z-[1] border-[3px] border-solid border-gradient text-left text-5xl py-6 px-24 flex gap-5">
        <b className="relative leading-[150%] z-[2] mq450:text-lgi mq450:leading-[29px]">
          Contract Address:
        </b>
        <div className="relative leading-[150%] inline-block max-w-full z-[2] mq450:text-lgi mq450:leading-[29px]">
          0xeebCAE2F8aBFEA67f42E7b2B18b8B7b56628EB21
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <img
            className="w-6 h-6 relative z-[2]"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
      </div>
      <div className="flex gap-8 pt-16">
        <div className="w-[349px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            Book Of Apes
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Name
          </b>
        </div>
        <div className="w-[349px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            BSC
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Network
          </b>
        </div>
        <div className="w-[349px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
          <h2 className="m-0 text-inherit leading-[150%] font-bold font-inherit inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
            18
          </h2>
          <b className="text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
            Decimal
          </b>
        </div>
        <div className="w-[349px] h-[207px] text-center text-21xl text-color-text-color rounded-xl bg-mediumvioletred-200 border-solid border-gradient flex justify-center flex-col items-center">
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
