import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import backItemPink from "@/assets/BackItemPink.svg";
import backItemGreen from "@/assets/BackItemGreen.svg";
import eligibilityArrow from "@/assets/eligibility-arrow.svg";

const EligibilityCheck = () => {
  return (
    <section
      className="
    w-full px-4 sm:px-8 lg:px-20
    pt-12 sm:pt-16
    pb-20 sm:pb-24 lg:pb-28
    flex flex-col items-center
    gap-8 sm:gap-10 lg:gap-12
    relative overflow-hidden
  "
    >
      <motion.img
        src={backItemPink}
        alt=""
        className="hidden lg:block absolute left-20 top-[20px] w-[131px] h-[117px] -translate-x-1/3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.img
        src={backItemGreen}
        alt=""
        className="hidden lg:block absolute right-40 top-[300px] w-[124px] h-[124px] translate-x-1/3"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.div
        className="max-w-[792px] flex flex-col items-center gap-3 sm:gap-4 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="w-full text-center text-primary text-[24px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Want to understand your eligibility for available support?
        </motion.h2>
        <motion.div
          className="max-w-[668px] flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-center text-grey-1000 text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.5]">
            Answer a few simple questions about your situation. This allows us
            to identify what support may be available and suggest next steps.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant="default"
          size="default"
          className="h-auto sm:h-[59px] py-3 sm:py-0 px-5 sm:px-6 rounded-md gap-2 w-full sm:w-auto max-w-[400px]"
        >
          <span className="text-[15px] sm:text-lg font-medium leading-[1.5] sm:leading-[27px] text-center">
            Check your eligibility for support
          </span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        </Button>
      </motion.div>
    </section>
  );
};

export default EligibilityCheck;
