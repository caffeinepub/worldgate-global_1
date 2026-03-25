import {
  Award,
  Clock,
  FileCheck,
  HeartHandshake,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const whyPoints = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our consultants have 10+ years of experience in international immigration laws, visa procedures, and embassy protocols across 15+ countries.",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    desc: "We believe in full transparency. Every fee, timeline, and step is clearly communicated before you begin your application journey.",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    desc: "With a 98% visa approval rate, our proven methodology and thorough preparation ensures maximum chances of success.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    desc: "No two immigration cases are alike. We create a customized plan tailored to your unique profile, goals, and destination.",
  },
  {
    icon: FileCheck,
    title: "Document Support",
    desc: "Expert documentation review, translation, attestation, and submission support to ensure every paper is perfect.",
  },
  {
    icon: Clock,
    title: "Post-Visa Assistance",
    desc: "Our support doesn't end at visa approval. We help you prepare for arrival, settlement, and life in your new country.",
  },
];

const milestones = [
  {
    year: "2020",
    event: "Founded in India with a vision to democratize global immigration",
  },
  {
    year: "2021",
    event: "Expanded to Gulf visa services — UAE, Saudi Arabia, Qatar",
  },
  {
    year: "2022",
    event: "Launched immigration consultancy for Canada, Australia, and UK",
  },
  { year: "2023", event: "Processed 2,000+ successful visa applications" },
  {
    year: "2023",
    event: "Introduced Germany Chancenkarte and Europe work permit services",
  },
  {
    year: "2026",
    event: "Reached 5,000+ visa approvals with 98% success rate",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.06 255) 0%, oklch(0.18 0.07 255) 100%)",
        }}
        data-ocid="about.section"
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
              About WorldGate Global
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-white/65 font-body text-lg max-w-2xl mx-auto">
              Your trusted partner in navigating the complexities of global
              immigration and visa services since 2020.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-navy-mid py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-2xl p-8 card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <Award size={24} className="text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-3 gold-underline">
                Our Mission
              </h2>
              <p className="text-white/65 font-body leading-relaxed mt-6">
                To empower every Indian with the knowledge, guidance, and
                support they need to successfully navigate international
                immigration — making global opportunities accessible to all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-2xl p-8 card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <Star size={24} className="text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-3 gold-underline">
                Our Vision
              </h2>
              <p className="text-white/65 font-body leading-relaxed mt-6">
                To become India's most trusted immigration consultancy — known
                for integrity, excellence, and genuine care for every client's
                international journey and future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white gold-underline gold-underline-center">
              Our Journey
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={`${m.year}-${i}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 mb-8"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-bold text-sm font-body">
                    {m.year}
                  </span>
                </div>
                <div className="flex-1 pt-4">
                  <div className="h-px bg-gold/20 mb-3" />
                  <p className="text-white/70 font-body">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-mid py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white gold-underline gold-underline-center">
              Why Choose WorldGate Global
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <p.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm font-body leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
