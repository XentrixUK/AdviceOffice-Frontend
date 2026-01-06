import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.svg";
import heroWave from "@/assets/hero-wave.svg";

const Hero = () => {
  return (
    <section className="bg-primary min-h-[600px] sm:min-h-[700px] lg:min-h-[810px] relative overflow-hidden">
      <div className="w-full px-4 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-16 lg:px-20 lg:pt-[206px] lg:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-full lg:max-w-[707px] flex flex-col gap-6 sm:gap-8 lg:gap-12">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-white text-[28px] leading-[1.3] sm:text-[36px] sm:leading-[1.35] lg:text-[56px] lg:leading-[78.4px] font-bold max-w-full sm:max-w-[500px] lg:max-w-[625px]">
                  Making UK systems easier to understand
                </h1>
                <p className="text-[#F6F6F6] text-[16px] leading-[1.5] sm:text-[18px] sm:leading-[1.6] lg:text-[24px] lg:leading-[39px] font-normal max-w-full sm:max-w-[480px] lg:max-w-[612px]">
                  Free, confidential advice to help individuals, refugees, migrants, and families understand their rights, access support, and move forward with confidence.
                </p>
              </div>
              
              <Button variant="white" size="default" className="w-full sm:w-fit group">
                <span>Get Free Advice</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="hidden md:block w-full md:w-[350px] lg:w-[556px] h-auto md:h-[300px] lg:h-[474px] relative mx-auto lg:mx-0">
              <img
                src={heroIllustration}
                alt="Friendly advisor helping a diverse family in an advice office setting"
                className="w-full h-full object-contain lg:object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <img 
        src={heroWave} 
        alt="" 
        className="absolute bottom-0 left-0 w-full h-auto"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;