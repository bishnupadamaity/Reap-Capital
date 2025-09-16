import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = () => {
  const featureCards = [
    {
      id: "fast-approvals",
      title: "Fast Approvals",
      description:
        "Get funding decisions quickly, no long waits or back-and-forth.",
      className: "col-span-2 row-span-1",
      imageContent: (
        <div className="relative h-[345px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Frame"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/frame-1686557646.svg"
          />
          <div className="absolute w-[298px] h-[298px] top-[62px] left-[29px]">
            <div className="relative h-[248px] top-[50px] bg-[url(https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-3--2025--08-27-37-pm-2-1.png)] bg-cover bg-[50%_50%]">
              <img
                className="absolute w-[298px] h-[248px] top-0 left-0 object-cover"
                alt="Chatgpt image jul"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-3--2025--08-27-37-pm-2-1.png"
              />
            </div>
          </div>
          <div className="absolute w-40 h-40 top-[33px] left-[318px] rotate-[43.15deg]">
            <div className="relative w-44 h-[172px] top-[23px] left-5">
              <img
                className="absolute w-[163px] h-[83px] top-[45px] left-1.5 rotate-[-43.15deg] object-cover"
                alt="Chatgpt image jul"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-3--2025--08-27-37-pm-2-1.png"
              />
              <img
                className="absolute w-[163px] h-[83px] top-[45px] left-1.5 rotate-[-43.15deg] object-cover"
                alt="Chatgpt image jul"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-3--2025--08-27-37-pm-2-1.png"
              />
            </div>
          </div>
        </div>
      ),
      textPosition: "bottom",
    },
    {
      id: "flexible-loan",
      title: "Flexible Loan Options",
      description:
        "Choose a loan that fits your exact business need, from working capital to growth funding.",
      className: "col-span-1 row-span-1",
      imageContent: (
        <div className="h-52 bg-white relative overflow-hidden">
          <div className="relative w-[641px] h-[233px] -top-0.5 left-[-19px]">
            <div className="absolute w-[641px] h-[216px] top-0 left-0 blur-[82px] bg-[linear-gradient(314deg,rgba(45,135,100,0.4)_0%,rgba(97,255,150,0.4)_52%,rgba(112,241,255,0.4)_100%)]" />
            <img
              className="absolute w-[338px] h-[231px] top-0.5 left-[146px]"
              alt="Mask group"
              src="https://c.animaapp.com/mfjdkgyvaVebQt/img/mask-group-1.png"
            />
            <img
              className="absolute w-[465px] h-[219px] top-0.5 left-[19px]"
              alt="Frame"
              src="https://c.animaapp.com/mfjdkgyvaVebQt/img/frame-1686557650.png"
            />
          </div>
        </div>
      ),
      textPosition: "bottom",
    },
    {
      id: "simple-process",
      title: "Simple Process",
      description:
        "Minimal paperwork. Clear steps. Full support from application to disbursal.",
      className: "col-span-1 row-span-1",
      imageContent: (
        <div className="h-52 bg-white relative overflow-hidden">
          <div className="relative w-[641px] h-[231px] -top-0.5 left-[-19px]">
            <div className="absolute w-[641px] h-[216px] top-0 left-0 blur-[82px] bg-[linear-gradient(314deg,rgba(45,135,100,0.4)_0%,rgba(97,255,150,0.4)_52%,rgba(112,241,255,0.4)_100%)]" />
            <img
              className="absolute w-[357px] h-[229px] top-0.5 left-[19px]"
              alt="Process"
              src="https://c.animaapp.com/mfjdkgyvaVebQt/img/process.png"
            />
          </div>
        </div>
      ),
      textPosition: "bottom",
    },
    {
      id: "msme-experts",
      title: "MSME-Focused Experts",
      description:
        "Work with people who truly understand the needs and challenges of small business owners.",
      className: "col-span-1 row-span-1",
      imageContent: (
        <div className="h-52 bg-white relative overflow-hidden">
          <div className="relative w-[641px] h-56 -top-0.5 left-[-19px]">
            <div className="absolute w-[641px] h-[216px] top-0 left-0 blur-[82px] bg-[linear-gradient(314deg,rgba(45,135,100,0.4)_0%,rgba(97,255,150,0.4)_52%,rgba(112,241,255,0.4)_100%)]" />
            <img
              className="absolute w-[357px] h-[222px] top-0.5 left-[19px]"
              alt="Rating"
              src="https://c.animaapp.com/mfjdkgyvaVebQt/img/rating.png"
            />
          </div>
        </div>
      ),
      textPosition: "bottom",
    },
    {
      id: "trusted-partners",
      title: "Trusted Lending Partners",
      description:
        "We connect you to top NBFCs and financial institutions across India, safely and securely.",
      className: "col-span-1 row-span-1",
      imageContent: (
        <div className="h-52 bg-white relative overflow-hidden">
          <div className="relative w-[641px] h-[216px] -top-0.5 left-[-19px] blur-[82px] bg-[linear-gradient(314deg,rgba(45,135,100,0.4)_0%,rgba(97,255,150,0.4)_52%,rgba(112,241,255,0.4)_100%)]" />
        </div>
      ),
      textPosition: "bottom",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="grid grid-cols-3 gap-8 max-w-[1125px] mx-auto">
        {featureCards.map((card, index) => (
          <Card
            key={card.id}
            className={`${card.className} bg-white rounded-[60px_20px_20px_20px] overflow-hidden border border-solid border-[#0000001f] shadow-[0px_1px_3px_#8282821a,0px_5px_5px_#82828217,0px_12px_7px_#8282820d,0px_21px_8px_#82828203,0px_33px_9px_transparent] translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              { "--animation-delay": `${index * 200}ms` } as React.CSSProperties
            }
          >
            <CardContent className="p-0 h-full flex flex-col">
              {card.imageContent}
              <div className="p-8 flex-1 flex flex-col justify-end">
                <h3 className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-black text-[28px] tracking-[0] leading-[normal] mb-3">
                  {card.title}
                </h3>
                <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-lg tracking-[0] leading-[26px]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
