import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";

const HomePage = () => {
  return (
    <div className="w-full relative bg-color-background-color overflow-hidden flex flex-col items-end justify-start gap-[62.9px] leading-[normal] tracking-[normal] mq925:gap-[16px] mq1350:gap-[31px]">
      <FrameComponent7 />
      <FrameComponent6 />
      <div className="w-[929px] h-[902px] absolute !m-[0] top-[1050px] right-[-631px] [filter:blur(383.4px)] rounded-[50%] bg-skyblue-100" />
      <FrameComponent5 />
      <section className="self-stretch h-[950.1px] relative max-w-full mq1350:h-auto mq1350:min-h-[950.1]">
        <GroupComponent1 />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <GroupComponent />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[91.7px] pr-[1770px] pl-[1794px] gap-[1644px] mq450:gap-[205px] mq450:pl-5 mq450:pr-5 mq450:pb-[60px] mq450:box-border mq925:gap-[411px] mq925:pl-[448px] mq925:pr-[442px] mq925:box-border mq1350:gap-[822px] mq1350:pl-[897px] mq1350:pr-[885px] mq1350:box-border mq1825:flex-wrap mq1825:justify-center">
        <div className="ml-[-1961px] h-[263.4px] w-[317px] flex flex-col items-start justify-start pt-[154.3px] px-0 pb-0 box-border shrink-0 mq450:pt-[100px] mq450:box-border">
          <img
            className="self-stretch h-[299.3px] relative max-w-full overflow-hidden shrink-0 object-cover [debug_commit:1de1738] z-[3]"
            alt=""
            src="/mask-group-1@2x.png"
          />
        </div>
        <img
          className="self-stretch w-[279px] relative max-h-full object-contain min-h-[263px] shrink-0 [debug_commit:1de1738] z-[2]"
          alt=""
          src="/mask-group-2@2x.png"
        />
      </section>
    </div>
  );
};

export default HomePage;
