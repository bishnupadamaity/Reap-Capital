import { ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";

export const NavigationSection = () => {
  const loanTypes = [
    {
      title: "Working Capital Loan",
      description:
        "For businesses that need steady cash to handle day-to-day operations, from paying vendors to stocking inventory and managing payroll.",
      image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/working-capital-1.png",
      alt: "Working capital",
    },
    {
      title: "Business Expansion Loan",
      description:
        "Fund your next stage of expansion, whether it's opening a new location, upgrading equipment, or increasing production capacity.",
      image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/business-growth-1.png",
      alt: "Business growth",
    },
  ];

  return (
    <section className="w-full max-w-[1088px] mx-auto px-4 py-16 relative">
      {/* Header Section */}
      <header className="flex flex-col items-center mb-20 translate-y-[-1rem] animate-fade-in opacity-0">
        <Badge
          variant="outline"
          className="mb-[53px] px-[21px] py-[5px] bg-white rounded-[20px_5px_5px_5px] border-[#1caa7b] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_12px_5px_#00000003,0px_19px_5px_transparent] [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-[#109157] text-base"
        >
          Financing Type
        </Badge>

        <div className="text-center max-w-[614px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="mb-8 [font-family:'Poppins',Helvetica] font-medium text-5xl tracking-[-1.44px] leading-normal">
            <span className="text-black tracking-[-0.69px]">
              Business Loans Made for{" "}
            </span>
            <span className="text-[#0aa26c] tracking-[-0.69px]">
              Real Business Needs
            </span>
          </h2>

          <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-lg leading-7 max-w-[610px]">
            Choose the right financing solution to manage cash flow, expand
            operations, or unlock working capital without any delays or
            confusion.
          </p>
        </div>
      </header>

      {/* Loan Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {loanTypes.map((loan, index) => (
          <Card
            key={index}
            className="bg-white rounded-[60px_20px_20px_20px] border border-[#c2c2c2] p-4 h-[263px] transition-transform hover:scale-105"
          >
            <CardContent className="flex h-full p-0">
              {/* Icon Section */}
              <div className="flex-shrink-0 flex items-center justify-center w-[140px]">
                <div
                  className="w-[124px] h-[124px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${loan.image})` }}
                >
                  <img
                    className="w-[124px] h-[124px] object-cover"
                    alt={loan.alt}
                    src={loan.image}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <Card className="bg-white rounded-[10px_14px_14px_10px] shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent] h-[247px] border-0">
                  <CardContent className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="[font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-2xl mb-5 leading-normal">
                        {loan.title}
                      </h3>

                      <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base leading-[26px]">
                        {loan.description}
                      </p>
                    </div>

                    <div className="flex items-center mt-auto">
                      <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-[#0aa26c] text-lg tracking-[-0.54px] underline">
                        Let's Start
                      </span>
                      <ArrowUpRightIcon className="w-5 h-5 ml-2 text-[#0aa26c]" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
