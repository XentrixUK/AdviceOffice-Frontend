import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesBg from "@/assets/services-bg.svg?url";
import impactWave from "@/assets/impact-wave.svg";
import welfareAdviceIcon from "@/assets/WelflareAdvice.svg";
import housingAdviceIcon from "@/assets/HousingAdvice.svg";
import integrateSupportIcon from "@/assets/IntegrateSupport.svg";

const services = [
  {
    title: "Welfare Benefits Advice",
    description: "Support to understand what you're entitled to, complete benefit forms, challenge decisions, and access financial support.",
    bgColor: "bg-primary-900",
    icon: welfareAdviceIcon,
  },
  {
    title: "Housing & Homelessness Advice",
    description: "Help with housing problems, homelessness applications, council decisions, temporary accommodation, and housing rights.",
    bgColor: "bg-coral",
    icon: housingAdviceIcon,
  },
  {
    title: "Integration & Settlement Support",
    description: "Practical support for refugees and migrants to navigate UK services, settle into communities, and build stability.",
    bgColor: "bg-lavender",
    icon: integrateSupportIcon,
  },
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="w-full px-4 sm:px-8 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-[120px] sm:pb-[160px] lg:pb-[200px] relative"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h2 className="text-primary text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.4] text-center">
            Our Services
          </h2>
          <p className="text-grey-1000 text-[16px] sm:text-[17px] lg:text-[18px] font-medium leading-[1.5] text-center max-w-[320px] sm:max-w-none">
            Getting the support you need, step by step
          </p>
        </div>

        <div className="w-full flex items-center justify-center lg:justify-between gap-4">
          <button
            className="hidden lg:flex flex-shrink-0 w-[30px] h-[30px] bg-grey-50 rounded-full items-center justify-center rotate-180"
            aria-label="Previous"
          >
            <ChevronRight className="w-5 h-5 text-grey-600" />
          </button>

          <div className="w-full lg:w-[1174px] flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center sm:items-stretch justify-center gap-6 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`w-full sm:w-[calc(50%-12px)] lg:w-[370px] ${service.bgColor} rounded-xl pt-10 sm:pt-12 lg:pt-[72px] pb-8 sm:pb-10 lg:pb-12 px-5 sm:px-6 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 shadow-[0px_4px_10px_rgba(0,0,0,0.16)]`}
              >
                <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] bg-white rounded-full flex items-center justify-center relative">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className={`object-contain ${
                      service.title === "Welfare Benefits Advice" ? "w-[50px] h-[45px] sm:w-[58px] sm:h-[52px] lg:w-[67px] lg:h-[60px]" :
                      service.title === "Housing & Homelessness Advice" ? "w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px]" :
                      "w-[37px] h-[45px] sm:w-[43px] sm:h-[52px] lg:w-[49px] lg:h-[60px]"
                    }`}
                  />
                </div>

                <div className="flex flex-col items-center gap-4 sm:gap-5">
                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <h3 className="text-white text-[18px] sm:text-[19px] lg:text-[20px] font-bold leading-[1.4] text-center">
                      {service.title}
                    </h3>
                    <p className="text-white text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.5] text-center">
                      {service.description}
                    </p>
                  </div>
                  <Button variant="white" size="default" className="group">
                    <span>Learn More</span>
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 text-primary" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="hidden lg:flex flex-shrink-0 w-[30px] h-[30px] bg-grey-50 rounded-full items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-grey-600" />
          </button>
        </div>
      </div>
      
      <div className="w-full absolute bottom-0 left-0 right-0">
        <img 
          src={impactWave} 
          alt="" 
          className="w-full h-auto block"
          style={{ display: 'block' }}
        />
      </div>
    </section>
  );
};

export default Services;
