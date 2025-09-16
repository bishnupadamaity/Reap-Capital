import { Button } from "../../../../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="w-full h-[555px] rounded-[60px] overflow-hidden [background:radial-gradient(50%_50%_at_49%_5%,rgba(20,157,100,1)_0%,rgba(11,100,82,1)_100%)] relative">
      <img
        className="absolute w-[120px] h-[268px] top-[219px] left-0 object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
        alt="Chatgpt image jul"
        src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-1--2025--07-37-49-pm-1-1.png"
      />

      <div className="absolute w-[1066px] h-[555px] top-0 left-[164px]">
        <img
          className="absolute w-[409px] h-[245px] top-0 left-[193px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          alt="Group"
          src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557909-1.png"
        />

        <img
          className="absolute w-[1066px] h-[364px] top-[191px] left-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          alt="Mask group"
          src="https://c.animaapp.com/mfjdkgyvaVebQt/img/mask-group-2.png"
        />

        <div className="absolute w-[659px] top-[170px] left-[227px] [text-shadow:0px_2px_4px_#0000001a] [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-white text-5xl text-center tracking-[-1.44px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <span className="tracking-[-0.69px]">
            Check your eligibility now &amp;
          </span>

          <span className="[font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold tracking-[-0.69px]">
            {" "}
            get a call back within a few hours
          </span>
        </div>

        <div className="absolute w-[632px] top-[303px] left-60 [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-[#ffffffe6] text-lg text-center tracking-[0] leading-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          Find out if you qualify in just a few steps. No delays. No paperwork
          hassles. Just fast answers and flexible loan options made for your
          business.
        </div>

        <Button className="absolute top-[406px] left-[453px] w-[206px] h-[58px] bg-black rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] [font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[-0.54px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] hover:bg-gray-900 transition-colors">
          Start Your Process
        </Button>
      </div>

      <img
        className="absolute w-[197px] h-[336px] top-[219px] left-[1243px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
        alt="Group"
        src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557910-1.png"
      />
    </section>
  );
};
