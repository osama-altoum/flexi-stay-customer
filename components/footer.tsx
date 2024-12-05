import { FooterLogo } from "./footer/footer-logo";
import { FooterLinks } from "./footer/footer-links";
import { FooterContact } from "./footer/footer-contact";
import { FooterSocial } from "./footer/footer-social";
import { FooterBottom } from "./footer/footer-bottom";
import { FooterPhone } from "./footer/footer-phone";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-12">
          <FooterLogo />
          <FooterPhone />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <FooterContact />
            <FooterSocial />
          </div>
          <div className="lg:col-span-4">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
}
