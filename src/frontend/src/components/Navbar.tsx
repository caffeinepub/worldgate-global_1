import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Countries", to: "/countries" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/wg_logo-019d1f23-e073-7452-824e-ce449c328859-1.png"
            alt="WorldGate Global Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-display font-bold text-white text-sm leading-tight">
              WorldGate Global
            </div>
            <div className="text-gold text-xs font-body">
              Immigration & Visa Services
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm font-body text-white/80 hover:text-gold transition-colors duration-200 rounded-md hover:bg-white/5"
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button
              className="bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-200 font-body text-sm px-5"
              data-ocid="nav.primary_button"
            >
              Book Consultation
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-navy-mid border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-md transition-colors font-body text-sm"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Button
                  className="w-full mt-2 bg-gold text-navy font-semibold hover:bg-gold-light font-body"
                  data-ocid="nav.primary_button"
                >
                  Book Consultation
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
