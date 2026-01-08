import { Users, Globe, FileCheck, Building } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Clients Supported",
  },
  {
    icon: Globe,
    value: "45+",
    label: "Communities Reached",
  },
  {
    icon: FileCheck,
    value: "1,200+",
    label: "Successful Cases",
  },
  {
    icon: Building,
    value: "30+",
    label: "Organisations Trained",
  },
];

const OurImpact = () => {
  return (
    <section className="w-full">
      <div className="bg-primary-50 px-4 sm:px-8 lg:px-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 sm:gap-10 lg:gap-14">
          <motion.div
            className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-primary text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.4] text-center">
              Our Impact
            </h2>
            <p className="text-grey-1000 text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.5] text-center max-w-[320px] sm:max-w-none">
              Making a difference in our community
            </p>
          </motion.div>

          <div className="w-full px-0 sm:px-8 lg:px-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] lg:w-[96px] lg:h-[96px] bg-white rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 8px 16px -4px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <stat.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-lavender" />
                </motion.div>
                <motion.span
                  className="text-coral text-[24px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.4] text-center mb-2 sm:mb-3 lg:mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-grey-1000 text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.5] text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
