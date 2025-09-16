import { ICONS } from "../../../../assets";
import { Button } from "../../../../components/ui/button";

const CheckEligibilitySection = () => {
  return (
    <section className="w-full bg-black">
      <div className="w-full h-[4.2rem] bg-white"></div>
      <div
        className="w-full rounded-[4rem] overflow-hidden relative flex items-center justify-center -mt-[3.8rem]"
        style={{
          background: "radial-gradient(circle at center 1%, #149D64, #0B6452)",
        }}
      >
        {/* Absolute position icons */}
        <img
          src={ICONS.LeftRocket}
          alt="Left Rocket"
          className="absolute top-1/3.5 left-0 w-[120px] h-[268px] object-contain"
        />
        <img
          src={ICONS.bgArrow}
          alt="Bg Arrow"
          className="absolute bottom-0 right-0 w-full h-[60%] object-contain"
        />
        <img
          src={ICONS.rightMoney}
          alt="Right Money"
          className="absolute bottom-1/6 right-0 w-[150px] h-[300px] object-contain blur-xs"
        />
        <img
          src={ICONS.topCutMoney}
          alt="Top Cut Money"
          className="absolute top-0 left-3/12 w-[16rem] h-[12rem] object-contain"
        />

        <div className=" max-w-[53rem] w-full flex flex-col items-center justify-center pt-[10rem] pb-[5rem] ">
          <div className="font-normal text-white text-6xl text-center tracking-[-1.44px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            {/* <span className="tracking-[-0.69px]"> */}
            Check your eligibility now &amp; get a call back within a few hours
            {/* </span> */}
          </div>

          <div className=" font-normal mt-4 text-[#ffffffe6] text-[1.5rem] text-center tracking-[0] leading-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            Find out if you qualify in just a few steps. No delays. No paperwork
            hassles. Just fast answers and flexible loan options made for your
            business.
          </div>

          <Button className=" m-10 w-[206px] h-[58px] bg-black rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] [font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[-0.54px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] hover:bg-gray-900 transition-colors cursor-pointer">
            Start Your Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckEligibilitySection;
