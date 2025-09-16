import { Badge } from "../../../../components/ui/badge";
import CustomAccordion from "../../../../components/ui/custom-accordion";

const FaqSection = () => {
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
      answer:
        "You can use the loan for various business purposes including working capital, equipment purchase, inventory management, business expansion, or any other legitimate business need.",
    },
    {
      id: "item-3",
      question: "Who can apply for a loan?",
      answer:
        "Any MSME business owner with a valid business registration, minimum 6 months of business operations, and required documentation can apply for our loans.",
    },
    {
      id: "item-4",
      question: "What documents do I need to apply for?",
      answer:
        "You'll need business registration documents, bank statements, GST certificate, PAN card, and other relevant business documents. Our team will guide you through the complete list.",
    },
    {
      id: "item-5",
      question: "How fast can I get the money?",
      answer:
        "Once your application is approved and all documents are verified, you can receive the funds within 24-48 hours directly to your business account.",
    },
    {
      id: "item-6",
      question: "Are there any extra charges apart from the interest?",
      answer:
        "We believe in transparent pricing. Apart from the interest rate, there are minimal processing fees. No hidden charges or surprise costs.",
    },
    {
      id: "item-7",
      question: "How do I send my documents?",
      answer:
        "You can upload your documents directly on the Reap Capital application page or email them to us. A representative will also be available to assist you if needed.",
    },
    {
      id: "item-8",
      question: "What's the loan amount and repayment period?",
      answer:
        "Loan amounts and tenure vary based on your business profile and needs. Repayment terms are flexible and discussed with you during the process.",
    },
  ];

  // Split FAQ items into two columns
  const leftColumnItems = faqItems.slice(0, 5);
  const rightColumnItems = faqItems.slice(5);

  return (
    <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms]">
      <div className="max-w-2xl mx-auto text-center">
        <Badge className="mb-4 p-[0.5rem] px-[1.5rem] bg-white rounded-tl-3xl text-lg border border-solid border-[#1caa7b]  text-[#109157] font-semibold">
          FAQs
        </Badge>
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-5xl text-center tracking-[-1.44px] leading-[68px]">
          <span className="text-black tracking-[-0.69px] font-medium ">
            Everything You{" "}
          </span>
          <br />
          <span className="text-[#0aa26c] tracking-[-0.69px] font-medium">
            Need to Know
          </span>
        </h2>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <CustomAccordion items={leftColumnItems} />
            </div>

            {/* Right Column */}
            <div>
              <CustomAccordion items={rightColumnItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
