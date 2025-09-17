import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";

const WhyUsSection = () => {
  return (
    <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
      <div className="max-w-2xl mx-auto text-center">
        <HeaderBrick text="Why us" />
        <h2 className=" flex flex-col items-center [font-family:'Poppins',Helvetica] font-medium text-5xl text-center tracking-[-1.44px] leading-[68px] mb-6">
          <span className="text-black tracking-[-0.69px]">Why Choose </span>
          <span className="text-[#0aa26c] tracking-[-0.69px]">
            Reap Capital?
          </span>
        </h2>
        <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-lg text-center tracking-[0] leading-[26px]">
          We Keep It Simple, So You Can Focus on Business
        </p>
      </div>
    </section>
  );
};

export default WhyUsSection;
