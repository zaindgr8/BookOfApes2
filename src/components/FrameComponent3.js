import { useMemo } from "react";

const FrameComponent3 = ({ prop, decimal, propLeft }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[486px] left-[984px] w-[349px] h-[207px] text-center text-21xl text-color-text-color font-text-body-2"
      style={frameDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumvioletred-200 w-full h-full" />
        <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-full h-full border-[3px] border-solid border-gradient" />
      </div>
      <b className="absolute top-[51px] left-[23px] leading-[150%] inline-block w-[304px] z-[4] mq450:text-5xl mq450:leading-[36px] mq925:text-13xl mq925:leading-[48px]">
        {prop}
      </b>
      <b className="absolute top-[120px] left-[23px] text-5xl inline-block w-[304px] z-[4] mq450:text-lgi">
        {decimal}
      </b>
    </div>
  );
};

export default FrameComponent3;
