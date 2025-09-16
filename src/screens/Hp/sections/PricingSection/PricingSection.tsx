import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const PricingSection = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Why should I take a loan from Reap Capital?",
      answer:
        "Reap Capital offers quick, flexible, and transparent loans designed specifically for MSME business owners. The process is simple, the approvals are fast, and you get full support at every step.",
    },
    {
      id: "item-2",
      question: "What can I use the loan for?",
      answer: "",
    },
    {
      id: "item-3",
      question: "Who can apply for a loan?",
      answer: "",
    },
    {
      id: "item-4",
      question: "What documents do I need to apply for?",
      answer: "",
    },
    {
      id: "item-5",
      question: "Are there any extra charges apart from the interest?",
      answer: "",
    },
    {
      id: "item-6",
      question: "How do I send my documents?",
      answer: "",
    },
    {
      id: "item-7",
      question: "What's the loan amount and repayment period?",
      answer: "",
    },
    {
      id: "item-8",
      question: "How will I get the money after approval?",
      answer: "",
    },
  ];

  return (
    <div className="w-full max-w-[696px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="space-y-6"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={`bg-white rounded-[20px] border border-solid border-[#c2c2c2] shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent] translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${(index + 1) * 100}ms`,
              } as React.CSSProperties
            }
          >
            <AccordionTrigger className="px-[25px] py-[18px] [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] text-left hover:no-underline">
              {item.question}
            </AccordionTrigger>
            {item.answer && (
              <AccordionContent className="px-[25px] pb-[18px] pt-0">
                <div className="text-[#414141] [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-base tracking-[0] leading-[26px]">
                  {item.answer}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
