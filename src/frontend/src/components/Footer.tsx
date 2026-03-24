import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Tourist & Visitor Visas", hash: "tourist-visitor-visas" },
  { label: "Immigration Consultancy", hash: "immigration-consultancy" },
  { label: "Work Visas & Jobs", hash: "work-visas-jobs" },
  { label: "Hajj & Umrah Packages", hash: "hajj-umrah-packages" },
  { label: "Canada PR Immigration", hash: "immigration-consultancy" },
  { label: "Australia PR Immigration", hash: "immigration-consultancy" },
  { label: "Gulf Job Visas", hash: "work-visas-jobs" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/wg_logo-019d1f23-e073-7452-824e-ce449c328859-1.png"
                alt="WorldGate Global"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-display font-bold text-white text-sm leading-tight">
                  WorldGate Global
                </div>
                <div className="text-gold text-xs font-body">
                  Immigration & Visa Services
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed">
              Your trusted partner for global visas & immigration. Expert
              guidance for Gulf, Europe, UK, Canada, Australia & USA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-display font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Countries", to: "/countries" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-gold text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-display font-semibold text-base mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`/services#${item.hash}`}
                    className="text-white/60 hover:text-gold text-sm font-body transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-display font-semibold text-base mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm font-body">
                <Phone size={14} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+917838352909"
                  className="hover:text-gold transition-colors"
                >
                  +91-7838352909
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm font-body">
                <MessageCircle
                  size={14}
                  className="text-gold mt-0.5 shrink-0"
                />
                <a
                  href="https://wa.me/917838352909"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm font-body">
                <Mail size={14} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:info@worldgateglobal.com"
                  className="hover:text-gold transition-colors"
                >
                  info@worldgateglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm font-body">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span>India Office, [Address]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body">
            © {year} WorldGate Global Immigration & Visa Services. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Built with ♥ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
