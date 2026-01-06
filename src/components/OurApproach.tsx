import approachDecoration from "@/assets/approach-decoration.svg";

const approaches = [
  {
    number: "1",
    title: "Listening first",
    description: "We take time to understand your situation.",
    numberColor: "text-primary",
  },
  {
    number: "2",
    title: "Explaining your options",
    description: "Clear information about available support",
    numberColor: "text-coral",
  },
  {
    number: "3",
    title: "Practical help",
    description: "Hands-on support or referrals where needed.",
    numberColor: "text-lavender",
  },
];

const OurApproach = () => {
  return (
    <section id="about" className="w-full px-4 py-12 sm:px-8 sm:py-16 lg:p-20 bg-primary-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-0">
          <div className="w-full lg:w-[469px] flex flex-col gap-3">
            <h2 className="text-coral text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.4] lg:leading-[67.2px]">
              Our approach
            </h2>
            <p className="text-grey-1000 text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.5] lg:leading-[27px]">
              We offer a calm, confidential space to talk through your situation, understand your circumstances, and explore what support may be available to you.
            </p>
          </div>

          <div className="w-full lg:w-[573px] flex flex-col gap-8 sm:gap-10 lg:gap-12 items-start">
            {approaches.map((approach) => (
              <div
                key={approach.number}
                className="w-full flex items-start gap-4 sm:gap-5 lg:gap-6"
              >
                <div className="flex-shrink-0 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[73px] lg:h-[73px] bg-white rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.15)] flex items-end justify-center pt-2 pb-2">
                  <span className={`${approach.numberColor} text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.4] text-center`}>
                    {approach.number}
                  </span>
                </div>
                <div className="flex-1 flex flex-col gap-2 lg:gap-3">
                  <h3 className="text-grey-1000 text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[1.4] lg:leading-[33.6px]">
                    {approach.title}
                  </h3>
                  <p className="text-grey-900 text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.5] lg:leading-[27px]">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <img 
        src={approachDecoration} 
        alt="" 
        className="hidden sm:block absolute left-[40%] sm:left-[45%] lg:left-[595px] bottom-8 sm:bottom-12 lg:top-[328.48px] w-[80px] sm:w-[100px] lg:w-[127.66px] h-auto -rotate-[5deg] origin-top-left"
        aria-hidden="true"
      />
    </section>
  );
};

export default OurApproach;
