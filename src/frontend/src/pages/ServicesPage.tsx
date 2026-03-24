import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, BookOpen, Check, Globe, Plane } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: "tourist-visitor-visas",
    icon: Plane,
    title: "Tourist & Visitor Visas",
    desc: "Plan your dream trip with our expert visa assistance. We handle everything from application to approval for all major tourist destinations.",
    items: [
      "USA B1/B2 Visitor Visa",
      "UK Standard Visitor Visa",
      "Ireland Visitor Visa",
      "Schengen Visa (26 countries)",
      "Canada Visitor Visa (TRV)",
      "Gulf Tourist Visas (UAE, Saudi, Qatar)",
    ],
    cta: "Apply for Tourist Visa",
  },
  {
    id: "immigration-consultancy",
    icon: Globe,
    title: "Immigration Consultancy",
    desc: "Permanent residency and immigration guidance for top destinations. Our consultants provide tailored advice for your unique profile.",
    items: [
      "Canada PR (Express Entry / PNP)",
      "Australia PR (Skilled Migration)",
      "Germany Opportunity Card",
      "Skilled Worker Assessment & Guidance",
      "Documentation Review & Support",
      "IELTS / Language Test Guidance",
    ],
    cta: "Explore Immigration Options",
  },
  {
    id: "work-visas-jobs",
    icon: Award,
    title: "Work Visas & Jobs",
    desc: "Unlock international career opportunities. We assist with work permits, job placements, and all documentation for global employment.",
    items: [
      "UK Skilled Worker Visa",
      "Europe Work Permit",
      "Germany Chancenkarte (Opportunity Card)",
      "UAE / Dubai Job Visa",
      "Qatar Work Visa",
      "Saudi Arabia, Oman, Kuwait Job Visas",
      "Job Assistance & CV Guidance",
    ],
    cta: "Find Work Abroad",
  },
  {
    id: "hajj-umrah-packages",
    icon: BookOpen,
    title: "Hajj & Umrah Packages",
    desc: "Complete spiritual journey packages with professional support from India. All-inclusive arrangements for a blessed and hassle-free experience.",
    items: [
      "Umrah Packages (Economy & Premium)",
      "Hajj Packages (Government & Private)",
      "Saudi Hajj/Umrah Visa Processing",
      "Hotel Accommodation (Makkah & Madinah)",
      "Food & Meal Arrangements",
      "Travel & Ziyarat Support",
    ],
    cta: "View Packages",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.06 255) 0%, oklch(0.18 0.07 255) 100%)",
        }}
        data-ocid="services.section"
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
              Our Services
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-white/65 font-body text-lg max-w-2xl mx-auto">
              Comprehensive immigration and visa solutions tailored to your
              destination and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="bg-navy">
        {services.map((service, si) => (
          <section
            key={service.title}
            id={service.id}
            className={`py-20 ${si % 2 === 1 ? "bg-navy-mid" : "bg-navy"}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: si % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={si % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                    <service.icon size={26} className="text-gold" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 gold-underline">
                    {service.title}
                  </h2>
                  <p className="text-white/65 font-body leading-relaxed mb-6 mt-6">
                    {service.desc}
                  </p>
                  <Link to="/contact">
                    <Button
                      className="bg-gold text-navy font-bold hover:bg-gold-light font-body"
                      data-ocid="services.primary_button"
                    >
                      {service.cta}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: si % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={si % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div
                    className={`rounded-2xl p-8 card-glow ${si % 2 === 0 ? "bg-navy-mid" : "bg-navy"}`}
                  >
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} className="text-gold" />
                          </div>
                          <span className="text-white/80 font-body text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
