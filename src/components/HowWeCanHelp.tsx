import { motion } from "framer-motion";
import housingIcon from "@/assets/Housing.svg";
import financesIcon from "@/assets/Finances.svg";
import settingIcon from "@/assets/Setting.svg";
import familyIcon from "@/assets/Family.svg";
import progressIcon from "@/assets/Progress.svg";
import backItemPink from "@/assets/BackItemPink.svg";
import backItemGreen from "@/assets/BackItemGreen.svg";

const helpItems = [
  {
    title: "Housing",
    description: "Eviction, rent issues, unsafe accommodation",
    icon: housingIcon,
  },
  {
    title: "Finances",
    description: "Benefits, income support, money worries",
    icon: financesIcon,
  },
  {
    title: "Settling",
    description: "Understanding UK systems and services",
    icon: settingIcon,
  },
  {
    title: "Family",
    description: "Schools, childcare, family support",
    icon: familyIcon,
  },
  {
    title: "Progress",
    description: "Education, training, work opportunities",
    icon: progressIcon,
  },
];

const HowWeCanHelp = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-8 sm:py-16 lg:p-20 relative overflow-visible">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-lavender text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.4] lg:leading-[67.2px] text-center max-w-[767px]">
              How We Can Help
            </h2>
            <p className="text-grey-1000 text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.5] lg:leading-[27px] text-center max-w-[767px] px-2">
              Lorem ipsum dolor sit amet consectetur. Augue iaculis leo in
              sociis et tortor. Bibendum aliquam ultrices lobortis platea augue
              felis. Quis ultrices fusce etiam hendrerit elit sit eget eu.
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
            {helpItems.map((item, index) => (
              <motion.div
                key={index}
                className="px-5 py-6 sm:py-7 lg:py-8 bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.15)] rounded-xl flex flex-col items-center gap-4 sm:gap-5 lg:gap-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                }}
              >
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-grey-1000 text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[1.4] lg:leading-[33.6px] text-center">
                    {item.title}
                  </h3>
                  <p className="text-grey-900 text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.5] lg:leading-[27px] text-center">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.img
        src={backItemGreen}
        alt=""
        className="hidden sm:block absolute left-20 top-0 sm:top-12 lg:top-20 w-[80px] sm:w-[100px] lg:w-[124px] h-auto rotate-180 origin-top-left z-0"
        aria-hidden="true"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />

      <motion.img
        src={backItemPink}
        alt=""
        className="hidden sm:block absolute right-10 top-2 sm:top-4 lg:top-6 w-[85px] sm:w-[105px] lg:w-[131px] h-auto rotate-180 origin-top-left"
        aria-hidden="true"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      />
    </section>
  );
};

export default HowWeCanHelp;
