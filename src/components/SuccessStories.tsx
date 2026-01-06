import knowledgeIcon from "@/assets/knowledge.svg";
import supportIcon from "@/assets/support.svg";
import employmentIcon from "@/assets/employment.svg";

const stories = [
  {
    tag: "Welfare Rights",
    tagBg: "bg-primary-50",
    tagText: "text-primary",
    iconBg: "bg-primary",
    titleColor: "text-primary",
    title: "Knowledge Empowers",
    icon: knowledgeIcon,
    description:
      "A client facing benefit sanctions learned their rights and options through our advice service, enabling them to successfully challenge the decision.",
    highlight: "Appeal won, benefits restored",
  },
  {
    tag: "Benefits Support",
    tagBg: "bg-coral-50",
    tagText: "text-coral",
    iconBg: "bg-coral",
    titleColor: "text-coral",
    title: "Support That Made a Difference",
    icon: supportIcon,
    description:
      "A single parent navigating the benefits system found clarity and confidence through our advocacy, ensuring their children had the support they needed.",
    highlight: "£450/month secured",
  },
  {
    tag: "Employment",
    tagBg: "bg-lavender-50",
    tagText: "text-lavender",
    iconBg: "bg-lavender",
    titleColor: "text-lavender",
    title: "From Uncertainty to Employment",
    icon: employmentIcon,
    description:
      "With our employment support and guidance, a young person new to the UK found their first job and began building their future in their new community.",
    highlight: "Full-time position achieved",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full px-20 py-20 flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-3 max-w-[800px]">
        <h2
          className="text-center text-primary text-[48px] font-black leading-[67.2px]"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          Stay Informed: Success stories
        </h2>
        <p
          className="max-w-[642px] text-center text-grey-1000 text-[18px] font-medium leading-[27px]"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          Here are a few examples of how advice and support can help people
          understand their options and move forward.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8">
        {stories.map((story) => (
          <div
            key={story.title}
            className="flex-1 bg-white rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.15)] p-8 flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-16 h-16 ${story.iconBg} rounded-full flex items-center justify-center`}
              >
                <img 
                  src={story.icon} 
                  alt={story.title} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div
                className={`h-7 px-4 rounded-full ${story.tagBg} flex items-center`}
              >
                <span
                  className={`text-[14px] leading-5 font-normal ${story.tagText}`}
                  style={{ fontFamily: "Avenir, sans-serif" }}
                >
                  {story.tag}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3
                className={`${story.titleColor} text-[20px] font-black leading-[28px]`}
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                {story.title}
              </h3>
              <p
                className="text-grey-1000 text-[18px] font-medium leading-[27px]"
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                {story.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#CCCCCC] flex items-center gap-2">
              <div className="w-4 h-4 relative">
                <div className="absolute inset-[3px] rounded border-[1.3px]" />
              </div>
              <span
                className="text-grey-1000 text-[16px] font-medium leading-6"
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                {story.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;


