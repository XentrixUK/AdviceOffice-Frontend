import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EligibilityCheck = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-6 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
      <div className="max-w-[792px] flex flex-col items-center gap-3 sm:gap-4">
        <h2 className="w-full text-center text-primary text-[24px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.4]">
          Want to understand your eligibility for available support?
        </h2>
        <div className="max-w-[668px] flex flex-col items-center gap-2">
          <p className="text-center text-grey-1000 text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.5]">
            Answer a few simple questions about your situation. This allows us to
            identify what support may be available and suggest next steps.
          </p>
        </div>
      </div>

      <Button variant="default" size="default" className="h-auto sm:h-[59px] py-3 sm:py-0 px-5 sm:px-6 rounded-md gap-2 w-full sm:w-auto max-w-[400px]">
        <span className="text-[15px] sm:text-lg font-medium leading-[1.5] sm:leading-[27px] text-center">
          Check your eligibility for support
        </span>
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
      </Button>
    </section>
  );
};

export default EligibilityCheck;
