import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Clock,
  FileCheck,
  Globe,
  MapPin,
  Plane,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import BookingForm from "../components/BookingForm";
import { useGetTestimonials } from "../hooks/useQueries";

const stats = [
  { icon: FileCheck, value: "5,000+", label: "Visas Processed" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
];

const serviceCategories = [
  {
    icon: Plane,
    title: "Tourist & Visitor Visas",
    desc: "USA, UK, Schengen, Canada, Gulf & more. Expert guidance for smooth approvals.",
    to: "/services",
  },
  {
    icon: Globe,
    title: "Immigration Consultancy",
    desc: "Canada PR, Australia PR, Germany Opportunity Card & skilled worker guidance.",
    to: "/services",
  },
  {
    icon: Award,
    title: "Work Visas & Jobs",
    desc: "UK, Europe, Germany Chancenkarte, Gulf job visas with placement assistance.",
    to: "/services",
  },
  {
    icon: BookOpen,
    title: "Hajj & Umrah Packages",
    desc: "Complete Hajj & Umrah packages with visa, accommodation, food & travel support.",
    to: "/services",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Expert Team",
    desc: "Years of proven experience in immigration law and visa processing.",
  },
  {
    icon: FileCheck,
    title: "High Success Rate",
    desc: "98% visa approval rate backed by thorough documentation support.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    desc: "Tailored immigration plans for every individual client.",
  },
  {
    icon: Clock,
    title: "Transparent Process",
    desc: "Clear timelines, honest assessments, no hidden fees.",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function TestimonialCard({
  name,
  location,
  rating,
  text,
}: { name: string; location: string; rating: number; text: string }) {
  return (
    <div className="bg-navy-mid rounded-xl p-6 card-glow transition-all duration-300">
      <div className="flex items-center gap-1 mb-3">
        {STAR_KEYS.map((k, i) => (
          <Star
            key={k}
            size={14}
            className={i < rating ? "text-gold fill-gold" : "text-white/20"}
          />
        ))}
      </div>
      <p className="text-white/75 text-sm font-body leading-relaxed mb-4 line-clamp-4">
        "{text}"
      </p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <span className="text-gold font-bold text-sm">{name[0]}</span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm font-body">
            {name}
          </div>
          <div className="text-white/40 text-xs font-body flex items-center gap-1">
            <MapPin size={10} />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}

const SKELETON_KEYS = ["sk1", "sk2", "sk3"];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const { data: testimonials, isLoading: testimonialsLoading } =
    useGetTestimonials();

  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials.slice(0, 3)
      : [
          {
            id: 1n,
            clientName: "Rahul Sharma",
            location: "Delhi, India",
            rating: 5n,
            reviewText:
              "WorldGate Global made our Canada PR dream a reality. Their team was professional, thorough, and always kept us informed. Highly recommended!",
          },
          {
            id: 2n,
            clientName: "Priya Nair",
            location: "Kerala, India",
            rating: 5n,
            reviewText:
              "Got my UK work visa in record time. The documentation support was exceptional and the team guided me through every step.",
          },
          {
            id: 3n,
            clientName: "Mohammed Iqbal",
            location: "Hyderabad, India",
            rating: 5n,
            reviewText:
              "Excellent Umrah package service. Everything was perfectly arranged — visa, accommodation, transport. Truly a blessed experience.",
          },
        ];

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "url('/assets/uploads/chatgpt_image_mar_19_2026_11_26_52_am-019d1f23-e380-72fc-b1c6-70f4d1a18a14-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.section"
      >
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.06 255 / 0.88) 0%, oklch(0.18 0.07 255 / 0.80) 100%)",
          }}
        />

        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(0.73 0.12 75)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: "oklch(0.5 0.15 240)" }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            style={{ y: heroTextY }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <Globe size={14} className="text-gold" />
                <span className="text-gold text-xs font-body font-semibold tracking-wide uppercase">
                  Trusted Immigration Partner
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Your Trusted Partner for
                <span className="block text-gold">Global Visas &</span>
                <span className="block">Immigration</span>
              </h1>
              <p className="text-white/65 font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Expert immigration consultancy for Gulf, Europe, UK, Canada,
                Australia & USA. We turn your global dreams into reality.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gold text-navy font-bold hover:bg-gold-light transition-all duration-200 font-body px-8"
                    data-ocid="hero.primary_button"
                  >
                    Book Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-body px-8"
                    data-ocid="hero.secondary_button"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4 mt-10 justify-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                  className="bg-navy-light/80 backdrop-blur-sm border border-gold/20 rounded-xl px-5 py-4 card-glow"
                >
                  <stat.icon size={20} className="text-gold mb-1 mx-auto" />
                  <div className="font-display font-bold text-xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
          >
            <title>Decorative wave</title>
            <path
              d="M0 60L1440 60L1440 20C1200 60 240 0 0 40L0 60Z"
              fill="oklch(0.20 0.065 255)"
            />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-navy-mid py-20" data-ocid="services.section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 gold-underline gold-underline-center">
              Our Services
            </h2>
            <p className="text-white/55 font-body mt-6 max-w-xl mx-auto">
              Comprehensive immigration and visa solutions for every destination
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={svc.to}>
                  <div className="bg-navy border border-white/10 rounded-2xl p-6 h-full card-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <svc.icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-white/55 text-sm font-body leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy py-20" data-ocid="why.section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white gold-underline gold-underline-center">
              Why Choose WorldGate?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-navy-mid py-20" data-ocid="booking.section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white gold-underline gold-underline-center">
              Book a Free Consultation
            </h2>
            <p className="text-white/55 font-body mt-6 max-w-lg mx-auto">
              Take the first step towards your global journey. Our experts will
              guide you through every step.
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-navy py-20" data-ocid="testimonials.section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white gold-underline gold-underline-center">
              Client Success Stories
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialsLoading
              ? SKELETON_KEYS.map((k) => (
                  <Skeleton key={k} className="h-48 rounded-xl bg-navy-light" />
                ))
              : displayTestimonials.map((t, i) => (
                  <motion.div
                    key={String(t.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    data-ocid={`testimonials.item.${i + 1}`}
                  >
                    <TestimonialCard
                      name={t.clientName}
                      location={t.location}
                      rating={Number(t.rating)}
                      text={t.reviewText}
                    />
                  </motion.div>
                ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button
                variant="outline"
                className="border-gold/40 text-gold hover:bg-gold/10 font-body"
              >
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
