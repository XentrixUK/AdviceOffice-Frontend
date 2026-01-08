import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import purpleBg from "@/assets/purplebg.png";

const CTASection = () => {
  return (
    <section className="w-full flex justify-center pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-10 lg:px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-[1288px] w-full flex justify-center items-center"
      >
        <img
          src={purpleBg}
          alt=""
          className="w-full h-auto min-h-[320px] sm:min-h-[350px] lg:min-h-0 object-cover rounded-[20px] sm:rounded-[32px] lg:rounded-[40px]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 sm:gap-8 lg:gap-12 px-5 sm:px-10 lg:px-6 py-6 sm:py-10 lg:py-0">
          <div className="max-w-[876px] flex flex-col items-center gap-3 sm:gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full text-center text-white text-[28px] leading-[1.3] sm:text-[36px] sm:leading-[1.35] lg:text-[48px] lg:leading-[78.4px] font-bold"
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              Looking for advice? <br className="hidden lg:block" />
              We're here to support you.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-[876px] text-center text-white/90 text-[14px] sm:text-lg lg:text-[24px] font-normal leading-[1.6] sm:leading-relaxed lg:leading-8"
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              Free, confidential guidance to help you understand your situation,
              explore your options, and move forward with confidence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Button
              variant="white"
              size="default"
              className="h-[50px] sm:h-[52px] lg:h-[59px] px-6 sm:px-6 rounded-lg group text-[15px] sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
            >
              <span>Get Free Advice</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1 text-primary" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
