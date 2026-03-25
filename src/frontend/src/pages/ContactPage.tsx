import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "../hooks/useQueries";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7838352909",
    href: "tel:+917838352909",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/917838352909",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@worldgateglobal.com",
    href: "mailto:info@worldgateglobal.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "India Office, [Address Placeholder]",
    href: "#",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutateAsync, isPending } = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await mutateAsync(form);
      toast.success(
        "Inquiry submitted! We will get back to you within 24 hours.",
      );
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error(
        "Failed to submit. Please try again or contact us on WhatsApp.",
      );
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.06 255) 0%, oklch(0.18 0.07 255) 100%)",
        }}
        data-ocid="contact.section"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl rounded-full"
          style={{ background: "oklch(0.73 0.12 75)" }}
        />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-white/65 font-body text-lg max-w-2xl mx-auto">
              Get in touch with our immigration experts. We're here to help you
              every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-6 gold-underline">
                Get In Touch
              </h2>
              <p className="text-white/60 font-body leading-relaxed mb-8 mt-6">
                Ready to begin your immigration journey? Contact our expert
                consultants today for personalized guidance and a free initial
                consultation.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 bg-navy-mid rounded-xl p-4 card-glow hover:border-gold/20 border border-white/5 transition-all group"
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <info.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-body uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-white font-body text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917838352909"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full font-body font-bold"
                  style={{ background: "#25D366", color: "white" }}
                  data-ocid="contact.primary_button"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat on WhatsApp Now
                </Button>
              </a>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-48 bg-navy-mid flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold/40 mx-auto mb-2" />
                  <p className="text-white/30 text-sm font-body">
                    Google Maps — India Office Location
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-6 gold-underline">
                Send an Inquiry
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-navy-mid rounded-2xl p-8 card-glow space-y-5 mt-6"
                data-ocid="contact.modal"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label className="text-white/80 font-body text-sm">
                      Full Name *
                    </Label>
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="bg-navy border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 font-body text-sm">
                      Phone *
                    </Label>
                    <Input
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+91-7838352909"
                      className="bg-navy border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/80 font-body text-sm">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="bg-navy border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body"
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/80 font-body text-sm">
                    Message *
                  </Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-navy border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  size="lg"
                  className="w-full bg-gold text-navy font-bold hover:bg-gold-light font-body"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
