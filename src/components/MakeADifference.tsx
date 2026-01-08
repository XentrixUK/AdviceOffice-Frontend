import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroWave from "@/assets/hero-wave.svg";

const MakeADifference = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-3 pt-10 sm:pt-14 lg:pt-16 pb-36 sm:pb-48 lg:pb-56 px-5 sm:px-10 lg:px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-primary text-[28px] leading-[1.3] sm:text-[36px] sm:leading-[1.35] lg:text-[48px] lg:leading-[78.4px] font-bold"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          Make a Difference Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[642px] text-center text-[#3D3D3D] text-[15px] sm:text-lg font-normal leading-[1.6] sm:leading-relaxed px-1 sm:px-0"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          Your support helps us provide free, confidential advice on housing,
          welfare benefits, and access to essential services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 w-full sm:w-auto"
        >
          <Button
            variant="outline"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-5 sm:px-6 h-[52px] sm:h-[57px] text-[15px] sm:text-lg font-normal shadow-sm active:scale-[0.98] transition-all duration-200"
          >
            Become a Volunteer
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-2 border-coral text-coral hover:bg-coral hover:text-white rounded-full px-5 sm:px-6 h-[52px] sm:h-[57px] text-[15px] sm:text-lg font-normal shadow-sm active:scale-[0.98] transition-all duration-200"
          >
            Partner with Us
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-2 border-lavender text-lavender hover:bg-lavender hover:text-white rounded-full px-5 sm:px-6 h-[52px] sm:h-[57px] text-[15px] sm:text-lg font-normal shadow-sm active:scale-[0.98] transition-all duration-200"
          >
            Fundraise with us
          </Button>
        </motion.div>
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

export default MakeADifference;
