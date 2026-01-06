import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/advice-office-logo.svg";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Success stories", href: "#testimonials" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full px-4 py-6 sm:px-8 sm:py-8 lg:px-20 lg:py-14">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <img src={logo} alt="The Advice Office" className="h-[18px] sm:h-[20px] lg:h-[22px]" />

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-white text-[18px] leading-[27px] font-medium transition-opacity hover:opacity-80 flex items-center ${
                  link.hasDropdown ? "gap-1" : "gap-0"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-6 h-6" />}
              </a>
            ))}
          </nav>

          <Button variant="outline-white" className="hidden lg:flex" size="default">
            <Phone className="w-6 h-6" />
            <span>020 3773 2213</span>
          </Button>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary/95 backdrop-blur-sm py-6 mt-4 rounded-lg">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-[16px] sm:text-[18px] leading-[27px] font-medium px-4 sm:px-5 py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 sm:px-5 pt-4">
                <Button variant="outline-white" className="w-full">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-[16px] sm:text-[18px]">020 3773 2213</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;