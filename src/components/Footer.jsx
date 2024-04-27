import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between py-10 px-20 bg-color-text-color">
      <div className="flex flex-col w-1/3">
        <img className="w-full" alt="" src="/text-logo-2-1-1@2x.png" />
        <p className="font-text-body-2">
          With a focus on community engagement and innovative tokenomics, Book
          of Apes is more than just a crypto project—it's a movement towards
          decentralized creativity and ownership. Join us in shaping the future
          of digital art and collectibles!
        </p>
      </div>
      <div className="flex flex-col">
        <p className=" text-13xl text-color-background-color font-lato">
          Contact
        </p>
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] text-base text-gray-200 font-text-body-2">
          <div className=" tracking-[0.01em] whitespace-nowrap z-[2]">
            Example@example.com
          </div>
          <div className=" tracking-[0.01em] whitespace-nowrap z-[2]">
            +12-2345 567 78
          </div>
          <div className="w-[186px] flex flex-row items-start justify-start gap-[12px]">
            <div className="h-[54px] flex-1 relative rounded-xl bg-color-primary-color-2 z-[2]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-primary-color-2 w-full h-full hidden" />
              <img
                className="absolute h-[63.33%] w-[67.78%] top-[18.89%] right-[16.67%] bottom-[17.78%] left-[15.56%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/group-11.svg"
              />
            </div>
            <img
              className="h-[54px] w-[54px] relative min-h-[54px] z-[2]"
              loading="lazy"
              alt=""
              src="/group-24.svg"
            />
            <img
              className="h-[54px] w-[54px] relative min-h-[54px] z-[2]"
              loading="lazy"
              alt=""
              src="/group-23.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
