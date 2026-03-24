import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const countries = [
  {
    flag: "🇨🇦",
    name: "Niagara Falls",
    subtitle: "Canada",
    image: "/assets/generated/niagara-falls.dim_600x400.jpg",
    visaTypes: [
      "Visitor Visa (TRV)",
      "Express Entry PR",
      "Provincial Nominee Program",
      "Student Visa",
      "Work Permit",
    ],
    highlight: "Fastest growing immigration destination for skilled Indians",
    color: "from-red-900/20 to-transparent",
  },
  {
    flag: "🇬🇧",
    name: "Big Ben",
    subtitle: "United Kingdom",
    image: "/assets/generated/big-ben.dim_600x400.jpg",
    visaTypes: [
      "Standard Visitor Visa",
      "Skilled Worker Visa",
      "Student Visa",
      "Graduate Visa",
      "Family Visa",
    ],
    highlight:
      "Post-Brexit points-based system with strong demand for skilled workers",
    color: "from-blue-900/20 to-transparent",
  },
  {
    flag: "🇮🇪",
    name: "Cliffs of Moher",
    subtitle: "Ireland",
    image: "/assets/generated/cliffs-of-moher.dim_600x400.jpg",
    visaTypes: [
      "Tourist Visa (C)",
      "Employment Permit",
      "General Employment Permit",
      "Critical Skills Permit",
      "Student Visa",
    ],
    highlight: "English-speaking EU gateway with thriving tech sector",
    color: "from-green-900/20 to-transparent",
  },
  {
    flag: "🇪🇺",
    name: "Eiffel Tower",
    subtitle: "Europe (Schengen)",
    image: "/assets/generated/eiffel-tower.dim_600x400.jpg",
    visaTypes: [
      "Schengen Tourist Visa",
      "Germany Opportunity Card",
      "Germany Chancenkarte",
      "Europe Work Permit",
      "Study Visa",
    ],
    highlight: "One Schengen visa opens doors to 26 European countries",
    color: "from-indigo-900/20 to-transparent",
  },
  {
    flag: "🇺🇸",
    name: "Statue of Liberty",
    subtitle: "United States",
    image: "/assets/generated/statue-of-liberty.dim_600x400.jpg",
    visaTypes: [
      "B1/B2 Visitor Visa",
      "F-1 Student Visa",
      "H-1B Work Visa",
      "L-1 Transfer Visa",
      "O-1 Extraordinary Ability",
    ],
    highlight: "World's largest economy with unmatched opportunities",
    color: "from-blue-800/20 to-transparent",
  },
  {
    flag: "🇦🇺",
    name: "Sydney Opera House",
    subtitle: "Australia",
    image: "/assets/generated/sydney-opera-house.dim_600x400.jpg",
    visaTypes: [
      "Tourist Visa (600)",
      "Skilled Independent (189)",
      "State Nominated (190)",
      "Employer Sponsored (482)",
      "Student Visa (500)",
    ],
    highlight:
      "Top-ranked quality of life with strong skilled migration programs",
    color: "from-yellow-900/20 to-transparent",
  },
  {
    flag: "🏙️",
    name: "Burj Khalifa",
    subtitle: "UAE • Saudi Arabia • Qatar • Oman • Kuwait",
    image: "/assets/generated/burj-khalifa.dim_600x400.jpg",
    visaTypes: [
      "UAE Visit Visa",
      "Saudi Arabia Work Visa",
      "Qatar Job Visa",
      "Oman Work Permit",
      "Kuwait Employment Visa",
    ],
    highlight: "Tax-free salaries, booming economies, and proximity to India",
    color: "from-amber-900/20 to-transparent",
  },
];

export default function CountriesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.06 255) 0%, oklch(0.18 0.07 255) 100%)",
        }}
        data-ocid="countries.section"
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
              Countries We Serve
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-white/65 font-body text-lg max-w-2xl mx-auto">
              Visa and immigration expertise for 15+ countries across 5
              continents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, i) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`countries.item.${i + 1}`}
              >
                <div className="bg-navy-mid rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Attraction Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/80 via-transparent to-transparent" />
                    {/* Flag + Country label overlay */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <p className="text-white/60 text-xs font-body">
                          {country.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-6 pt-4 pb-2 bg-gradient-to-br ${country.color}`}
                  >
                    <p className="text-gold text-sm font-body italic">
                      {country.highlight}
                    </p>
                  </div>

                  <div className="p-6 pt-3 flex-1">
                    <h4 className="text-white/50 text-xs font-body uppercase tracking-wider mb-3">
                      Visa Types
                    </h4>
                    <ul className="space-y-1.5">
                      {country.visaTypes.map((vt) => (
                        <li
                          key={vt}
                          className="flex items-center gap-2 text-white/75 text-sm font-body"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {vt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gold/30 text-gold hover:bg-gold/10 font-body"
                        data-ocid="countries.secondary_button"
                      >
                        Get Visa Guidance{" "}
                        <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
