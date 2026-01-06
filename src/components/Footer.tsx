import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import footerBg from "@/assets/footer-bg.svg";

const quickLinks = ["Home", "About", "Services", "Training", "Partners", "Resources"];
const serviceLinks = ["Welfare Benefits", "Housing Support", "Integration", "Education", "Interpreting"];

const Footer = () => {
  return (
    <footer
      className="w-full px-20 py-20"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16 text-white">
        <div className="flex justify-between items-start">
          <div className="w-[256px] flex flex-col gap-6">
            <h3 className="text-white text-[34px] font-bold leading-[47.6px]">
              Advice. Action. Results.
            </h3>
            <p className="text-white text-base font-medium leading-6">
              Community-led support for individuals, refugees, migrants <br />& families navigating UK systems.
            </p>
          </div>

          <div className="flex gap-8 justify-end flex-1">
            <div className="w-[172px] flex flex-col gap-6">
              <h4 className="text-white text-xl font-medium leading-7">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white text-base font-medium leading-6 hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[187px] flex flex-col gap-6">
              <h4 className="text-white text-xl font-medium leading-7">Services</h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white text-base font-medium leading-6 hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[283px] flex flex-col gap-6">
              <h4 className="text-white text-xl font-medium leading-7">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base font-medium leading-6">
                    19 College Parade, Salusbury Road, London, NW6 6RN
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white text-base font-medium leading-6">
                    020 3773 2213 | 07983 798574
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <a
                    href="mailto:hello@theadviceoffice.org"
                    className="text-white text-base font-medium leading-6 hover:opacity-80 transition-opacity"
                  >
                    hello@theadviceoffice.org
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:opacity-90 transition-opacity"
                    aria-label={`Social media link`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/30 opacity-90">
          <p className="text-white text-base font-medium leading-6 text-center">
            © 2025 The Advice Office. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
