import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import servicesBg from "@/assets/services-bg.svg?url";
import impactWave from "@/assets/impact-wave.svg";
import welfareAdviceIcon from "@/assets/WelflareAdvice.svg";
import housingAdviceIcon from "@/assets/HousingAdvice.svg";
import integrateSupportIcon from "@/assets/IntegrateSupport.svg";
import educationSupportIcon from "@/assets/EducationSupport.svg";
import immigrationAdviceIcon from "@/assets/ImmigrationAdvice.svg";
import servicesArrow from "@/assets/services-arrow.svg";

const services = [
  {
    title: "Welfare Benefits Advice",
    description:
      "Support to understand what you're entitled to, complete benefit forms, challenge decisions, and access financial support.",
    bgColor: "bg-primary-900",
    icon: welfareAdviceIcon,
  },
  {
    title: "Housing & Homelessness Advice",
    description:
      "Help with housing problems, homelessness applications, council decisions, temporary accommodation, and housing rights.",
    bgColor: "bg-coral",
    icon: housingAdviceIcon,
  },
  {
    title: "Integration & Settlement Support",
    description:
      "Practical support for refugees and migrants to navigate UK services, settle into communities, and build stability.",
    bgColor: "bg-lavender",
    icon: integrateSupportIcon,
  },
  {
    title: "Education & Employment Support",
    description:
      "Advice on education options, school and college processes, skills development, job applications, and workplace issues.",
    bgColor: "bg-primary",
    icon: educationSupportIcon,
    iconSize: "w-[64px] h-[60px]",
  },
  {
    title: "Immigration Advice",
    description:
      "Information and guidance on immigration options and next steps, delivered in line with regulatory requirements.",
    bgColor: "bg-coral",
    icon: immigrationAdviceIcon,
    iconSize: "w-[57px] h-[60px]",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextServices = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, services.length - 3));
  };

  const prevServices = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="services"
      className="w-full px-4 sm:px-8 lg:px-20 pt-32 sm:pt-24 lg:pt-32 pb-[120px] sm:pb-[160px] lg:pb-[200px] relative"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-3 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src={servicesArrow}
            alt=""
            className="hidden lg:block absolute -right-[180px] -top-[20px] w-[85px] h-[112px]"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <h2 className="text-primary text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.4] text-center">
            Our Services
          </h2>
          <p className="text-grey-1000 text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.5] text-center max-w-[320px] sm:max-w-none">
            Getting the support you need, step by step
          </p>
        </motion.div>

        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-stretch justify-center gap-6 lg:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`w-full sm:w-[calc(50%-12px)] ${service.bgColor} rounded-xl pt-10 sm:pt-12 pb-8 sm:pb-10 px-5 sm:px-6 flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.16)]`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] bg-white rounded-full flex items-center justify-center relative mt-6 sm:mt-8"
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`object-contain ${
                    service.iconSize
                      ? service.iconSize
                      : service.title === "Welfare Benefits Advice"
                      ? "w-[50px] h-[45px] sm:w-[58px] sm:h-[52px]"
                      : service.title === "Housing & Homelessness Advice"
                      ? "w-[45px] h-[45px] sm:w-[52px] sm:h-[52px]"
                      : "w-[37px] h-[45px] sm:w-[43px] sm:h-[52px]"
                  }`}
                />
              </motion.div>

              <div className="flex flex-col items-center flex-grow mt-6 sm:mt-8">
                <div className="flex flex-col items-center gap-3 sm:gap-4 flex-grow">
                  <h3 className="text-white text-[18px] sm:text-[19px] font-black leading-[28px] text-center">
                    {service.title}
                  </h3>
                  <p className="text-white text-[15px] sm:text-[16px] font-medium leading-[27px] text-center">
                    {service.description}
                  </p>
                </div>
                <Button
                  variant="white"
                  size="default"
                  className="group mt-4 sm:mt-5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 text-primary" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:flex w-full items-center justify-between gap-4">
          <motion.button
            onClick={prevServices}
            disabled={currentIndex === 0}
            className="flex-shrink-0 w-[30px] h-[30px] bg-grey-50 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
            whileHover={{
              scale: currentIndex === 0 ? 1 : 1.1,
              backgroundColor:
                currentIndex === 0 ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft className="w-5 h-5 text-grey-600" />
          </motion.button>

          <div className="w-[1174px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex items-stretch justify-center gap-8"
              >
                {visibleServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className={`w-[370px] ${service.bgColor} rounded-xl pt-[72px] pb-12 px-6 flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.16)]`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0px 12px 24px rgba(0,0,0,0.25)",
                    }}
                  >
                    <motion.div
                      className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center relative"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className={`object-contain ${
                          service.iconSize
                            ? service.iconSize
                            : service.title === "Welfare Benefits Advice"
                            ? "w-[67px] h-[60px]"
                            : service.title === "Housing & Homelessness Advice"
                            ? "w-[60px] h-[60px]"
                            : "w-[49px] h-[60px]"
                        }`}
                      />
                    </motion.div>

                    <div className="flex flex-col items-center flex-grow mt-10">
                      <div className="flex flex-col items-center gap-4 flex-grow">
                        <h3 className="text-white text-[20px] font-black leading-[28px] text-center">
                          {service.title}
                        </h3>
                        <p className="text-white text-[18px] font-medium leading-[27px] text-center">
                          {service.description}
                        </p>
                      </div>
                      <Button
                        variant="white"
                        size="default"
                        className="group mt-5"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 text-primary" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={nextServices}
            disabled={currentIndex >= services.length - 3}
            className="flex-shrink-0 w-[30px] h-[30px] bg-grey-50 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
            whileHover={{
              scale: currentIndex >= services.length - 3 ? 1 : 1.1,
              backgroundColor:
                currentIndex >= services.length - 3
                  ? "rgba(0,0,0,0.05)"
                  : "rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5 text-grey-600" />
          </motion.button>
        </div>
      </div>

      <motion.div
        className="w-full absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <img
          src={impactWave}
          alt=""
          className="w-full h-auto block"
          style={{ display: "block" }}
        />
      </motion.div>
    </section>
  );
};

export default Services;
