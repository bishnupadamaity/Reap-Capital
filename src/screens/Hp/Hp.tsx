import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import CheckEligibilitySection from "./sections/CheckEligibilitySection/CheckEligibilitySection";
import FaqSection from "./sections/FaqSection/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { SecuritySupportSection } from "./sections/SecuritySupportSection/SecuritySupportSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

const sectionDividers = [
  {
    text: "Get Business Funds",
    leftPadding: "left-6",
  },
  {
    text: "Apply for Loan",
    leftPadding: "left-11",
  },
  {
    text: "Get Business Funds",
    leftPadding: "left-6",
  },
];

const statsCards = [
  {
    number: "800,000+",
    description: "Businesses Served",
    image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/business-1.png",
    alt: "Business",
  },
  {
    number: "196+",
    description: "Industries Catered",
    image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/insdustries-1.png",
    alt: "Industries",
  },
  {
    number: "50M+",
    description: "Entrepreneurs Connected",
    image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/connected-1.png",
    alt: "Connected",
  },
  {
    number: "200+",
    description: "Employees & Growing",
    image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/employee-1.png",
    alt: "Employee",
  },
];

const securityCards = [
  {
    title: "Your Data Stays Private",
    description:
      "We do not share or sell your information to third-party marketers or external agencies.",
    image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557909-3.png",
  },
  {
    title: "RBI-Compliant Security",
    description:
      "We follow all RBI guidelines and use leading security protocols to keep your data safe online.",
    image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557909-4.png",
  },
];

export const Hp = () => {
  return (
    <div className="bg-white w-full min-h-screen" data-model-id="221:2">
      <div className="bg-white w-full relative">
        {/* Hero Section with Background Images */}
        <section className="relative w-full bg-white rounded-b-[40px] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <TestimonialsSection />
          <img
            className="w-[169px] h-[182px] absolute top-[86px] left-0 blur-[6.5px] object-cover"
            alt="Chatgpt image jul"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-1--2025--07-33-24-pm-2.png"
          />
          <img
            className="w-[141px] h-[305px] absolute top-[386px] right-[141px] object-cover"
            alt="Chatgpt image jul"
            src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-1--2025--07-33-24-pm-2.png"
          />
        </section>

        {/* Call to Action Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <CallToActionSection />
        </section>

        {/* Navigation Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <NavigationSection />
        </section>

        {/* Stats Cards Section */}
        <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {statsCards.map((stat, index) => (
                <Card
                  key={index}
                  className="w-[236px] h-[244px] bg-white rounded-[60px_20px_20px_20px] border border-solid border-[#c2c2c2]"
                >
                  <CardContent className="p-0">
                    <div className="relative w-[222px] h-[230px] m-[7px] rounded-[55px_14px_14px_10px] bg-white overflow-hidden shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent]">
                      <div className="absolute w-[178px] h-[71px] top-[139px] left-[18px]">
                        <div className="absolute w-[174px] top-0 left-0 [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal]">
                          {stat.number}
                        </div>
                        <div className="absolute w-[166px] top-[45px] left-0 [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[26px] whitespace-nowrap">
                          {stat.description}
                        </div>
                      </div>
                      <div className="absolute w-[100px] h-[100px] top-[18px] left-[18px]">
                        <img
                          className="w-[100px] h-[100px] object-cover"
                          alt={stat.alt}
                          src={stat.image}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider 1 */}
        <section className="w-full px-4 py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="max-w-7xl mx-auto relative">
            <div className="flex items-center justify-center">
              <img
                className="w-[427px] h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/vector-20.svg"
              />
              <Button className="mx-4 bg-black rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] h-auto px-6 py-4">
                <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[-0.54px] leading-[normal]">
                  {sectionDividers[0].text}
                </span>
              </Button>
              <img
                className="w-[427px] h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/vector-20.svg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <FeaturesSection />
        </section>

        {/* Why Choose Section */}
        <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4 bg-white rounded-[20px_5px_5px_5px] border border-solid border-[#1caa7b] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_12px_5px_#00000003,0px_19px_5px_transparent] text-[#109157] font-semibold">
              Financing Type
            </Badge>
            <h2 className="[font-family:'Poppins',Helvetica] font-medium text-5xl text-center tracking-[-1.44px] leading-[68px] mb-6">
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

        {/* Services Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <ServicesSection />
        </section>

        {/* Security & Support Header */}
        <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4 bg-white rounded-[20px_5px_5px_5px] border border-solid border-[#1caa7b] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_12px_5px_#00000003,0px_19px_5px_transparent] text-[#109157] font-semibold">
              Financing Type
            </Badge>
            <h2 className="[font-family:'Poppins',Helvetica] font-medium text-5xl text-center tracking-[-1.44px] leading-[68px] mb-6">
              <span className="text-black tracking-[-0.69px]">
                Security & Support{" "}
              </span>
              <span className="text-[#0aa26c] tracking-[-0.69px]">
                You Can Trust
              </span>
            </h2>
            <div className="flex items-center justify-center mb-6">
              <img
                className="w-[29px] h-[29px] mr-4"
                alt="Group"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557963.png"
              />
              <span className="[font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-[#0aa26c] text-[22px] tracking-[0] leading-[26px]">
                No Unofficial Charges
              </span>
            </div>
            <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-lg text-center tracking-[0] leading-[26px]">
              We never ask for additional fees to speed up processing or reduce
              interest rates. What you see is what you get.
            </p>
          </div>
        </section>

        {/* Security Cards */}
        <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
              {securityCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-[354px] h-[303px] bg-white rounded-[60px_20px_20px_20px] border border-solid border-[#c2c2c2]"
                >
                  <CardContent className="p-0 relative">
                    <div className="relative w-[369px] h-[314px] -top-[18px] -left-[23px]">
                      <div className="absolute w-[339px] h-[289px] top-[25px] left-[30px] rounded-[55px_14px_14px_10px] bg-white overflow-hidden shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent]">
                        <div className="relative w-[294px] h-[231px] top-[30px] left-4">
                          <div className="absolute w-[294px] h-[103px] top-32 left-0">
                            <div className="absolute w-[290px] top-0 left-0 [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[-0.40px] leading-[normal]">
                              {card.title}
                            </div>
                            <div className="absolute w-72 top-8 left-0.5 [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[26px]">
                              {card.description}
                            </div>
                          </div>
                          <div className="absolute w-[237px] h-[216px] top-0 left-[19px] blur-[82px] bg-[linear-gradient(314deg,rgba(45,135,100,0.4)_0%,rgba(97,255,150,0.4)_52%,rgba(112,241,255,0.4)_100%)]" />
                        </div>
                      </div>
                      <img
                        className="absolute w-[171px] h-[183px] top-0 left-0"
                        alt="Group"
                        src={card.image}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider 2 */}
        <section className="w-full px-4 py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
          <div className="max-w-7xl mx-auto relative">
            <div className="flex items-center justify-center">
              <img
                className="w-[427px] h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/vector-20.svg"
              />
              <Button className="mx-4 bg-black rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] h-auto px-6 py-4">
                <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[-0.54px] leading-[normal]">
                  {sectionDividers[1].text}
                </span>
              </Button>
              <img
                className="w-[427px] h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/mfjdkgyvaVebQt/img/vector-20.svg"
              />
            </div>
          </div>
        </section>

        {/* Security Support Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
          <SecuritySupportSection />
        </section>

        {/* Pricing Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms]">
          <PricingSection />
        </section>

        {/* Hero and About Us Combined Section */}
        <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2800ms]">
          <div className="relative">
            <AboutUsSection />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Check Eligibility Section */}
        <CheckEligibilitySection />

        {/* Footer Section */}
        {/* <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3000ms]"> */}
        <section className="">
          <FooterSection />
        </section>
      </div>
    </div>
  );
};
