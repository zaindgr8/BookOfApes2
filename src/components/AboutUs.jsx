import React from "react";

const AboutUs = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <img
          className="h-[50rem] w-[50rem] object-contain"
          alt=""
          src="/group-189@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-6">
        <h1 className="m-0 text-inherit font-bold  mq450:text-5xl text-[6rem] text-white font-text-heading">
          About Us
        </h1>
        <div className="self-stretch relative text-5xl font-text-body-2 text-color-text-color z-[1] ">
          Book of Apes is a dynamic crypto project that merges the worlds of
          blockchain technology and creative expression. Our team is passionate
          about fostering a vibrant community of creators and collectors, driven
          by the principles of decentralization and ownership. With a commitment
          to innovation and inclusivity, we strive to revolutionize the way
          digital art and collectibles are created, shared, and valued.
        </div>
        <button className="cursor-pointer [border:none] py-4 px-[47px] bg-color-primary-color-2 rounded-xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-deepskyblue-100 mq450:pl-5 mq450:pr-5 mq450:box-border text-13xl leading-[150%]  font-text-body-2 text-color-background-color text-center font-medium ">
          Buy On Pinksale
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
