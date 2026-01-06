import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialsBg from "@/assets/testimonials-bg.svg";
import TestimonialsWave from "@/assets/testimonials-wave.svg";

const testimonials = [
  {
    quote:
      "As a refugee to the UK, I didn't know where to start. The team provided guidance from education to employment. I'm now working and settled.",
    name: "Hans K.",
    role: "Integration Support Client",
    rating: 5,
  },
  {
    quote:
      "They helped me appeal a benefits decision I didn't understand. Their patience and expertise made all the difference to my family.",
    name: "Maria S.",
    role: "Welfare Benefits Client",
    rating: 5,
  },
  {
    quote:
      "When I was facing homelessness, they helped me understand my rights and navigate the council process. I now have stable housing.",
    name: "David T.",
    role: "Housing Support Client",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[activeIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="w-full px-4 sm:px-10 lg:px-20 pt-14 sm:pt-24 lg:pt-40 pb-28 sm:pb-40 lg:pb-[200px] relative"
      style={{
        backgroundImage: `url(${testimonialsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col gap-2 sm:gap-3"
        >
          <h2 className="text-white text-[24px] sm:text-[36px] lg:text-[48px] font-black leading-[1.2] lg:leading-[67.2px]">
            What Our Clients Say
          </h2>
          <p className="text-white/90 text-[15px] sm:text-lg font-medium leading-relaxed lg:leading-[27px]">
            Real stories from the people we've helped
          </p>
        </motion.div>

        <div className="w-full flex items-center justify-center">
          <div className="flex-1 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 max-w-4xl">
            <div className="w-full flex items-center gap-2 sm:gap-6">
              <button
                onClick={prevTestimonial}
                className="flex-shrink-0 w-11 h-11 sm:w-[30px] sm:h-[30px] bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center touch-manipulation shadow-lg active:scale-95 transition-transform"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <div className="sm:hidden bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                      <p className="text-white text-[16px] font-medium leading-[1.6] text-center">
                        "{current.quote}"
                      </p>
                    </div>
                    <p className="hidden sm:block text-white text-xl lg:text-[30px] font-medium leading-[1.5] lg:leading-[45px] text-center px-4 lg:px-8">
                      "{current.quote}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={nextTestimonial}
                className="flex-shrink-0 w-11 h-11 sm:w-[30px] sm:h-[30px] bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center touch-manipulation shadow-lg active:scale-95 transition-transform"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-[90%] lg:w-[810px] pt-4 sm:pt-3 border-t border-white/30 flex flex-col items-center gap-2 sm:gap-2.5"
              >
                <span className="text-white text-[17px] sm:text-xl font-bold leading-7 text-center">
                  {current.name}
                </span>
                <span className="text-white/80 text-[14px] sm:text-lg font-medium leading-relaxed sm:leading-[27px] text-center">
                  {current.role}
                </span>
                <div className="text-star text-lg sm:text-xl leading-6 text-center flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.2 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 sm:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-white w-6" 
                      : "bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={TestimonialsWave}
        alt=""
        className="absolute bottom-0 left-0 w-full h-auto pt-50"
        aria-hidden="true"
      />
    </section>
  );
};

export default Testimonials;
