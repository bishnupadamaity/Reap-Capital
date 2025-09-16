import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = () => {
  const navigationItems = [
    { label: "About", active: false },
    { label: "Team", active: false },
    { label: "Contact", active: true },
  ];

  return (
    <section className="relative w-full h-[769px] rounded-[0px_0px_40px_40px] overflow-hidden [background:radial-gradient(50%_50%_at_49%_5%,rgba(20,157,100,1)_0%,rgba(11,100,82,1)_100%)]">
      <div className="relative h-[769px]">
        <div className="relative w-full h-[769px]">
          {/* Blurred background text effect */}
          <div className="absolute w-[835px] h-[87px] top-[275px] left-[120px]">
            <div className="relative w-[831px] h-[87px]">
              <div className="absolute w-[831px] top-0 left-0 blur-[42px] bg-[linear-gradient(90deg,rgba(108,174,73,1)_0%,rgba(93,255,244,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-transparent text-7xl tracking-[-2.16px] leading-[normal]">
                for your business
              </div>
              <div className="absolute w-[831px] top-0 left-0 blur-[42px] bg-[linear-gradient(90deg,rgba(108,174,73,1)_0%,rgba(93,255,244,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-transparent text-7xl tracking-[-2.16px] leading-[normal]">
                for your business
              </div>
            </div>
          </div>

          {/* Background decorative images */}
          <img
            className="absolute w-[783px] h-[698px] top-[71px] left-[657px]"
            alt="Group"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557995.png"
          />

          <img
            className="absolute w-[1066px] h-[299px] top-0 left-[194px]"
            alt="Mask group"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/mask-group.png"
          />

          {/* Navigation bar */}
          <nav className="absolute w-[325px] h-[60px] top-[23px] left-[997px] bg-white rounded-2xl overflow-hidden shadow-[0px_4px_8px_#0000001a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="flex items-center h-full px-7">
              {navigationItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex-1 text-center ${
                    index < navigationItems.length - 1 ? "mr-4" : ""
                  }`}
                >
                  {item.active ? (
                    <div className="bg-white rounded-[10px] border border-solid border-[#6cae48] px-[27px] py-[11px]">
                      <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-[#6cae48] text-base tracking-[-0.48px] leading-[normal] whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  ) : (
                    <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-black text-base tracking-[-0.48px] leading-[normal] whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Logo */}
          <div className="absolute w-[132px] h-[52px] top-[27px] left-[121px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="absolute w-[77px] h-[52px] top-0 left-[59px]">
              <div className="relative w-[73px] h-[52px]">
                <div className="left-0 text-white text-[22.8px] tracking-[-0.68px] absolute top-0 [font-family:'Altone_Trial-Regular',Helvetica] font-normal leading-[normal]">
                  Reap
                </div>
                <div className="top-6 left-0 text-white text-[22.8px] tracking-[-1.60px] absolute [font-family:'Altone_Trial-Regular',Helvetica] font-normal leading-[normal]">
                  Capital
                </div>
              </div>
            </div>
            <div className="absolute w-[50px] h-[50px] top-0.5 left-0 bg-[url(https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557879.png)] bg-[100%_100%]" />
          </div>

          {/* Decorative images */}
          <img
            className="absolute w-[362px] h-[401px] top-[207px] left-[960px]"
            alt="Frame"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/frame-1686557640.svg"
          />

          <img
            className="absolute w-[132px] h-[260px] top-[509px] left-0 object-cover"
            alt="Chatgpt image jul"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-1--2025--07-37-49-pm-1-1.png"
          />

          <img
            className="absolute w-[409px] h-[239px] top-[530px] left-[266px]"
            alt="Group"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557909.png"
          />

          <img
            className="absolute w-[364px] h-[191px] top-[578px] left-[913px]"
            alt="Group"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557910.png"
          />

          {/* Main heading */}
          <h1 className="absolute w-[716px] top-[211px] left-[120px] [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-white text-[64px] tracking-[-1.92px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Get quick, no-fuss loans
          </h1>

          {/* Secondary heading with gradient effect */}
          <h2 className="absolute w-[706px] top-[285px] left-[120px] [text-shadow:0px_2px_4px_#0000001a] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-white text-7xl tracking-[-2.16px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            for your business
          </h2>

          {/* CTA Button */}
          <Button className="absolute top-[510px] left-[119px] w-[178px] h-[58px] bg-black rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] hover:bg-gray-900 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg tracking-[-0.54px] leading-[normal]">
              Let&apos;s Start
            </span>
          </Button>
        </div>

        {/* Description text */}
        <p className="absolute w-[523px] top-[408px] left-[121px] [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-[#ffffffe6] text-lg tracking-[0] leading-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          No delays. No hidden terms. Just fast and flexible finance when you
          need it the most.
        </p>
      </div>
    </section>
  );
};
