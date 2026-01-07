import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import knowledgeIcon from "@/assets/knowledge.svg";
import supportIcon from "@/assets/support.svg";
import employmentIcon from "@/assets/employment.svg";
import storiesArrow from "@/assets/stories-arrow.svg";

const stories = [
  {
    tag: "Welfare Rights",
    tagBg: "bg-primary/10",
    tagText: "text-primary",
    iconBg: "bg-primary",
    titleColor: "text-primary",
    title: "Knowledge Empowers",
    description:
      "A client facing benefit sanctions learned their rights and options through our advice service, enabling them to successfully challenge the decision.",
    highlight: "Appeal won, benefits restored",
    icon: knowledgeIcon,
  },
  {
    tag: "Benefits Support",
    tagBg: "bg-coral/10",
    tagText: "text-coral",
    iconBg: "bg-coral",
    titleColor: "text-coral",
    title: "Support That Made a Difference",
    description:
      "A single parent navigating the benefits system found clarity and confidence through our advocacy, ensuring their children had the support they needed.",
    highlight: "£450/month secured",
    icon: supportIcon,
  },
  {
    tag: "Employment",
    tagBg: "bg-lavender/10",
    tagText: "text-lavender",
    iconBg: "bg-lavender",
    titleColor: "text-lavender",
    title: "From Uncertainty to Employment",
    description:
      "With our employment support and guidance, a young person new to the UK found their first job and began building their future in their new community.",
    highlight: "Full-time position achieved",
    icon: employmentIcon,
  },
];

const SuccessStories = () => {
  return (
    <section
      className="
    w-full
    px-4 sm:px-10 lg:px-20
    pt-10 sm:pt-16
    pb-20 sm:pb-24 lg:pb-28
    flex flex-col items-center
    gap-8 sm:gap-12 lg:gap-16
    relative
  "
    >
      <motion.img
        src={storiesArrow}
        alt=""
        className="
    hidden lg:block absolute
    right-[80px]
    bottom-[-40px]
    w-[130px] h-[150px]
    pointer-events-none
  "
        initial={{ opacity: 0, y: 20, rotate: 60 }}
        whileInView={{ opacity: 1, y: 0, rotate: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2 sm:gap-3 max-w-[800px]"
      >
        <h2
          className="text-center text-primary text-[24px] sm:text-[36px] lg:text-[48px] font-black leading-[1.2] lg:leading-[67.2px]"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          Stay Informed: Success stories
        </h2>
        <p
          className="max-w-[642px] text-center text-grey-1000 text-[15px] sm:text-[18px] font-medium leading-[1.6] sm:leading-[27px] px-2 sm:px-0"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          Here are a few examples of how advice and support can help people
          understand their options and move forward.
        </p>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 bg-white rounded-[20px] sm:rounded-[32px] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.1)] p-5 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 lg:gap-6 hover:shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className={`w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${story.iconBg} rounded-full flex items-center justify-center shadow-sm`}
              >
                <img
                  src={story.icon}
                  alt={story.tag}
                  className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </div>
              <div
                className={`h-7 sm:h-7 px-3 sm:px-4 rounded-full ${story.tagBg} flex items-center`}
              >
                <span
                  className={`text-[12px] sm:text-[14px] leading-5 font-semibold ${story.tagText}`}
                  style={{ fontFamily: "Avenir, sans-serif" }}
                >
                  {story.tag}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-2">
              <h3
                className={`${story.titleColor} text-[17px] sm:text-[20px] font-black leading-[1.3] sm:leading-[28px]`}
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                {story.title}
              </h3>
              <p
                className="text-grey-1000 text-[14px] sm:text-[18px] font-medium leading-[1.6] sm:leading-[27px]"
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                {story.description}
              </p>
            </div>

            <div className="mt-auto pt-4 sm:pt-4 border-t border-grey-200 flex items-center gap-2.5">
              <CheckCircle className={`w-5 h-5 ${story.titleColor}`} />
              <span
                className="text-grey-1000 text-[14px] sm:text-[16px] font-semibold leading-6"
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                {story.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
