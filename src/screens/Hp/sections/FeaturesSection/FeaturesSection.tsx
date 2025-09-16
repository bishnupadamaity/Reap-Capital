import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featuresData = [
  {
    title: "Line of Credit",
    description:
      "Access funds on demand. Use only what you need, when you need it, and pay interest only on the amount used.",
    iconSrc: "https://c.animaapp.com/mfjdkgyvaVebQt/img/credit-line.png",
    groupIconSrc:
      "https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557909-2.png",
  },
  {
    title: "Invoice Financing",
    description:
      "Waiting on payments? Convert unpaid invoices into working capital, no need to chase clients or delay growth plans.",
    iconSrc: "https://c.animaapp.com/mfjdkgyvaVebQt/img/credit-line-1.png",
    groupIconSrc: null,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full max-w-[1088px] mx-auto px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            className="bg-white rounded-[60px_20px_20px_20px] border border-[#c2c2c2] p-0 overflow-hidden translate-y-[-1rem] animate-fade-up opacity-0"
            style={
              {
                "--animation-delay": `${400 + index * 200}ms`,
              } as React.CSSProperties
            }
          >
            <CardContent className="p-0 h-[263px] relative">
              <div className="flex items-start gap-4 p-4 h-full">
                {/* Icon Section */}
                <div className="relative w-[124px] h-[124px] mt-[52px] flex-shrink-0">
                  <img
                    className="w-full h-full"
                    alt="Feature icon"
                    src={feature.iconSrc}
                  />
                  {feature.groupIconSrc && (
                    <img
                      className="absolute w-[39px] h-[47px] top-[17px] left-[76px]"
                      alt="Group icon"
                      src={feature.groupIconSrc}
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 pt-2">
                  <div className="bg-white rounded-[10px_14px_14px_10px] p-5 h-[247px] shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent] relative">
                    {/* Title and Description */}
                    <div className="mb-6">
                      <h3 className="[font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] mb-[21px]">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[26px]">
                        {feature.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="absolute bottom-5 left-5">
                      <Button
                        variant="link"
                        className="h-auto p-0 [font-family:'Inter_Variable-Medium',Helvetica] font-medium text-[#0aa26c] text-lg text-center tracking-[-0.54px] leading-[normal] underline hover:no-underline transition-all duration-300"
                      >
                        Let&apos;s Start
                        <ArrowUpRightIcon className="w-5 h-5 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
