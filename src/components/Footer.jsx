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
      <div className="flex flex-col">
        <p className="text-13xl text-color-background-color font-lato ">
          Join Us
        </p>
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] text-base text-gray-200 font-text-body-2">
          <a
            href="mailto:example@example.com"
            className="block text-black underline-none"
          >
            Example@example.com
          </a>
          <a
            href="tel:+123456756778"
            className="block text-black underline-none"
          >
            +12-2345 567 78
          </a>
          <div className="w-[186px] flex flex-row items-start justify-start gap-[12px]">
            <a href="#" className="block">
              <img
                className="h-[54px] flex-1 relative rounded-xl bg-color-primary-color-2 z-[2]"
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </a>
            <a href="#" className="block">
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
