import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import footerBg from "@/assets/footer-bg.png";

const quickLinks = ["Home", "About", "Services", "Training", "Partners", "Resources"];
const serviceLinks = ["Welfare Benefits", "Housing Support", "Integration", "Education", "Interpreting"];

const Footer = () => {
  return (
    <footer
      className="w-full px-6 pt-24 pb-12 md:px-12 md:pt-28 md:pb-16 lg:px-20 lg:pt-32 lg:pb-20"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12 lg:gap-16 text-white">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:justify-between lg:items-start">
          <div className="w-full lg:w-[256px] flex flex-col gap-4 md:gap-6">
            <h3 className="text-white text-2xl md:text-[28px] lg:text-[34px] font-bold leading-tight lg:leading-[47.6px]">
              Advice. Action. Results.
            </h3>
            <p className="text-white text-sm md:text-base font-normal leading-relaxed md:leading-6">
              Community-led support for individuals, refugees, migrants & families navigating UK systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:flex md:gap-8 lg:gap-8 lg:justify-end lg:flex-1">
            <div className="flex flex-col gap-4 md:gap-6 md:w-[172px]">
              <h4 className="text-white text-lg md:text-xl font-normal leading-7">Quick Links</h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white text-sm md:text-base font-normal leading-6 hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 md:w-[187px]">
              <h4 className="text-white text-lg md:text-xl font-normal leading-7">Services</h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white text-sm md:text-base font-normal leading-6 hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:gap-6 md:w-[283px]">
              <h4 className="text-white text-lg md:text-xl font-normal leading-7">Contact Us</h4>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm md:text-base font-normal leading-relaxed md:leading-6">
                    19 College Parade, Salusbury Road, London, NW6 6RN
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white text-sm md:text-base font-normal leading-6">
                    020 3773 2213 | 07983 798574
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <a
                    href="mailto:hello@theadviceoffice.org"
                    className="text-white text-sm md:text-base font-normal leading-6 hover:opacity-80 transition-opacity break-all md:break-normal"
                  >
                    hello@theadviceoffice.org
                  </a>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-90 transition-opacity"
                    aria-label={`Social media link`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/30 opacity-90">
          <p className="text-white text-sm md:text-base font-normal leading-6 text-center">
            © 2025 The Advice Office. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
