import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Star } from "lucide-react";
import { motion } from "motion/react";
import { useGetTestimonials } from "../hooks/useQueries";

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

const fallbackTestimonials = [
  {
    id: 1n,
    clientName: "Rahul Sharma",
    location: "Delhi, India",
    rating: 5n,
    reviewText:
      "WorldGate Global made our Canada PR dream a reality. Their team was professional, thorough, and always kept us informed. I got my PR within 8 months. Highly recommended to anyone serious about immigrating!",
  },
  {
    id: 2n,
    clientName: "Priya Nair",
    location: "Kerala, India",
    rating: 5n,
    reviewText:
      "Got my UK work visa in record time. The documentation support was exceptional and the team guided me through every step. Very professional and responsive service.",
  },
  {
    id: 3n,
    clientName: "Mohammed Iqbal",
    location: "Hyderabad, India",
    rating: 5n,
    reviewText:
      "Excellent Umrah package service. Everything was perfectly arranged — visa, accommodation, transport. Truly a blessed experience made easy by the WorldGate team.",
  },
  {
    id: 4n,
    clientName: "Sunita Verma",
    location: "Mumbai, India",
    rating: 5n,
    reviewText:
      "Applied for Australia PR through WorldGate and got my visa on first attempt. Their knowledge of Australian immigration is exceptional. Worth every rupee!",
  },
  {
    id: 5n,
    clientName: "Arun Kumar",
    location: "Chennai, India",
    rating: 5n,
    reviewText:
      "The team helped me get a Germany Chancenkarte. Process was smooth and they kept me updated at every step. Now living and working in Munich!",
  },
  {
    id: 6n,
    clientName: "Fatima Sheikh",
    location: "Pune, India",
    rating: 4n,
    reviewText:
      "Got my Schengen visa for my Europe trip without any hassle. The consultants were very knowledgeable and friendly. Will definitely use their services again.",
  },
];

export default function TestimonialsPage() {
  const { data: testimonials, isLoading } = useGetTestimonials();
  const display =
    testimonials && testimonials.length > 0
      ? testimonials
      : fallbackTestimonials;

  return (
    <div className="pt-20">
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.06 255) 0%, oklch(0.18 0.07 255) 100%)",
        }}
        data-ocid="testimonials.section"
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
              Client Success Stories
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-white/65 font-body text-lg max-w-2xl mx-auto">
              Real stories from real people who achieved their global dreams
              with WorldGate Global.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="testimonials.loading_state"
            >
              {SKELETON_KEYS.map((k) => (
                <Skeleton key={k} className="h-52 rounded-2xl bg-navy-light" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {display.map((t, i) => (
                <motion.div
                  key={String(t.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-navy-mid rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1"
                  data-ocid={`testimonials.item.${i + 1}`}
                >
                  <div className="flex items-center gap-1 mb-3">
                    {STAR_KEYS.map((k, si) => (
                      <Star
                        key={k}
                        size={14}
                        className={
                          si < Number(t.rating)
                            ? "text-gold fill-gold"
                            : "text-white/20"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-white/75 text-sm font-body leading-relaxed mb-5">
                    "{t.reviewText}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-gold font-bold text-sm">
                        {t.clientName[0]}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm font-body">
                        {t.clientName}
                      </div>
                      <div className="text-white/40 text-xs font-body flex items-center gap-1">
                        <MapPin size={10} /> {t.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
