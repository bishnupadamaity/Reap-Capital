export const AboutUsSection = () => {
  return (
    <footer className="relative w-full h-[413px] bg-black overflow-hidden">
      {/* Main logo section */}
      <div className="flex items-center justify-center pt-[126px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex items-center gap-4">
          {/* Logo icon */}
          <div className="w-[70px] h-[69px] bg-[url(https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557879-2.png)] bg-[100%_100%]" />

          {/* Company name */}
          <div className="flex items-baseline">
            <h2 className="text-white text-[66.6px] tracking-[-2.00px] [font-family:'Altone_Trial-Regular',Helvetica] font-normal leading-[normal]">
              Reap
            </h2>
            <h2 className="text-white text-[66.6px] tracking-[-4.66px] [font-family:'Altone_Trial-Regular',Helvetica] font-normal leading-[normal] ml-2">
              Capital
            </h2>
          </div>
        </div>
      </div>

      {/* Top divider line */}
      <img
        className="w-[1200px] absolute top-64 left-1/2 transform -translate-x-1/2 h-px object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
        alt="Vector"
        src="https://c.animaapp.com/mfjdkgyvaVebQt/img/vector-20.svg"
      />

      {/* Footer text section */}
      <div className="absolute w-full px-[120px] top-[284px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex justify-between items-center">
          <div className="[font-family:'Inter_Variable-Light',Helvetica] font-light text-[#fffffff2] text-sm tracking-[0] leading-[normal]">
            All copyrights reserve at @Zunoq
          </div>
          <div className="[font-family:'Inter_Variable-Light',Helvetica] font-light text-[#fffffff2] text-sm text-right tracking-[0] leading-[normal]">
            Policy, Terms and condition
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <img
        className="w-[1200px] absolute top-[327px] left-1/2 transform -translate-x-1/2 h-px object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        alt="Vector"
        src="https://c.animaapp.com/mfjdkgyvaVebQt/img/vector-20.svg"
      />

      {/* Gradient blur effect */}
      <div className="absolute w-[1764px] h-[68px] top-[372px] left-[-91px] blur-[82px] bg-[linear-gradient(314deg,rgba(45,135,100,0.6)_0%,rgba(97,255,150,0.6)_52%,rgba(112,241,255,0.6)_100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]" />
    </footer>
  );
};
