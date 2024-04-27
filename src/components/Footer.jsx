import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between  pt-5  px-7 bg-color-text-color">
      <div className="flex flex-col w-72">
        <a href="/" className="block">
          <img className="w-full" alt="" src="/text-logo-2-1-1@2x.png" />
        </a>
        <p className="font-text-body-2 text-black text-center">
          With a focus on community engagement and innovative tokenomics, Book
          of Apes is more than just a crypto project—it's a movement towards
          decentralized creativity and ownership. Join us in shaping the future
          of digital art and collectibles!
        </p>
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="">
          <span className="">Join</span>
          <span className="text-gradient">Us</span>
        </h1>
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] text-base text-gray-200 font-text-body-2">
          <div className="w-[186px] flex flex-row items-start justify-start gap-[12px]">
            <a href="https://twitter.com/bape_memecoin" target="_blank" className="block">
              <img
                className="h-[54px] flex-1 relative rounded-xl bg-color-primary-color-2 z-[2]"
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </a>
            <a href="https://t.me/bookofapes" target="_blank" className="block">
              <img
                className="h-[54px] w-[54px] relative min-h-[54px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-24.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
