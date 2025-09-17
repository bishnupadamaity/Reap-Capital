import { Button } from "../ui/button";

const SectionDivider = ({ text }: { text: string }) => {
  return (
    <section className="w-full px-4 py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center">
          <div className=" h-[1px] w-[90%] bg-green-300 rounded-2xl"></div>
          <Button className="mx-4 bg-black rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] h-auto px-10 py-4">
            <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[-0.54px] leading-[normal]">
              {text}
            </span>
          </Button>
          <div className=" h-[1px] w-[90%] bg-green-300 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionDivider;
