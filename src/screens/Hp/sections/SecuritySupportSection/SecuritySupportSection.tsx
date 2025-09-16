import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    quote:
      "Reap Capital helped me get the funds within 3 days. I didn't expect it to be this fast. The whole process was smooth, and their team kept me updated at every step.",
    name: "Pradeep Mehta",
    business: "Owner, Garment Wholesale Store, Jaipur",
    profileImage: "https://c.animaapp.com/mfjdkgyvaVebQt/img/-.svg",
  },
  {
    quote:
      "I was looking to expand my café and needed a quick loan. Reap Capital team explained everything clearly, no confusion at all. The money came right on time.",
    name: "Neha Arora",
    business: "Café Owner, Pune",
    profileImage: "https://c.animaapp.com/mfjdkgyvaVebQt/img/-.svg",
  },
  {
    quote:
      "I liked that they didn't ask for too many documents. I applied with just my GST, Aadhaar, and bank statements. Very helpful for a small business like mine.",
    name: "Imran Shaikh",
    business: "Electronics Shop, Hyderabad",
    profileImage: "https://c.animaapp.com/mfjdkgyvaVebQt/img/-.svg",
  },
  {
    quote:
      "As a trader, cash flow can get tight sometimes. Reap Capital's line of credit option really worked for me. I only paid interest on what I used. Simple and fair.",
    name: "Karthik Subramaniam",
    business: "Spices Trader, Coimbatore",
    profileImage: "https://c.animaapp.com/mfjdkgyvaVebQt/img/-.svg",
  },
];

export const SecuritySupportSection = () => {
  return (
    <section className="w-full py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <Badge
            variant="outline"
            className="mb-4 bg-white rounded-[20px_5px_5px_5px] border-[#1caa7b] text-[#109157] px-6 py-2 shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_12px_5px_#00000003,0px_19px_5px_transparent] [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-base"
          >
            Financing Type
          </Badge>

          <h2 className="text-center [font-family:'Poppins',Helvetica] font-medium text-5xl tracking-[-1.44px] leading-[68px]">
            <span className="text-black tracking-[-0.69px]">What Our </span>
            <span className="text-[#0aa26c] tracking-[-0.69px]">
              Customers Say…
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white rounded-[60px_20px_20px_15px] border border-[#c2c2c2] h-[273px] translate-y-[-1rem] animate-fade-in opacity-0`}
              style={
                {
                  "--animation-delay": `${200 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="relative p-0 h-full">
                <div className="relative w-full h-full p-2">
                  <div className="relative w-full h-full rounded-[55px_14px_14px_10px] bg-white overflow-hidden shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent]">
                    {/* Quote Icon */}
                    <img
                      className="absolute w-[23px] h-5 top-3 left-[34px]"
                      alt="Quote"
                      src="https://c.animaapp.com/mfjdkgyvaVebQt/img/--1.svg"
                    />

                    {/* Content */}
                    <div className="absolute w-[314px] h-[204px] top-[34px] left-4">
                      <div className="absolute w-[314px] h-[204px] top-0 left-0">
                        {/* Testimonial Text */}
                        <div className="w-[312px] top-0 text-black absolute left-0 [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-base tracking-[0] leading-[26px]">
                          "{testimonial.quote}"
                        </div>

                        {/* Customer Info */}
                        <div className="absolute w-[268px] h-[47px] top-[157px] left-0">
                          <div className="absolute w-36 top-0 left-0 [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-lg tracking-[-0.36px] leading-[normal]">
                            {testimonial.name}
                          </div>
                          <div className="absolute w-[264px] top-[30px] left-0 [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-[#797979] text-sm tracking-[-0.28px] leading-[normal]">
                            {testimonial.business}
                          </div>
                        </div>
                      </div>

                      {/* Profile Image */}
                      <img
                        className="absolute w-[53px] h-[47px] top-[115px] left-[243px]"
                        alt="Profile"
                        src={testimonial.profileImage}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <img
            className="w-[152px] h-16"
            alt="Navigation dots"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557970.png"
          />
        </div>
      </div>
    </section>
  );
};
