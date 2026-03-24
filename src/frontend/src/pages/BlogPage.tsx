import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar, Tag, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { BlogPost } from "../backend.d";
import { useGetBlogPostsByCategory } from "../hooks/useQueries";

const categories = [
  "All",
  "Visa Updates",
  "Immigration News",
  "Country Guides",
  "Tips & Advice",
  "Success Stories",
];
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

const fallbackPosts: BlogPost[] = [
  {
    id: 1n,
    title: "Canada Express Entry 2024: Major Changes You Need to Know",
    summary:
      "The IRCC has announced significant updates to Express Entry CRS scores and program-specific draws. Here's what Indian applicants need to know.",
    content: "",
    date: 1710000000n,
    author: "WorldGate Team",
    category: "Immigration News",
  },
  {
    id: 2n,
    title: "Germany Chancenkarte: Your Gateway to European Employment",
    summary:
      "Germany's new Opportunity Card allows skilled workers from India to enter Germany for job search. Complete guide on eligibility and application.",
    content: "",
    date: 1709500000n,
    author: "Visa Expert",
    category: "Country Guides",
  },
  {
    id: 3n,
    title: "UK Skilled Worker Visa: Updated Salary Thresholds for 2024",
    summary:
      "The UK Home Office has revised minimum salary requirements for skilled worker visa holders. Check if you still qualify under the new rules.",
    content: "",
    date: 1709000000n,
    author: "WorldGate Team",
    category: "Visa Updates",
  },
  {
    id: 4n,
    title: "Schengen Visa Tips: How to Maximize Your Approval Chances",
    summary:
      "Our immigration experts share the most common reasons for Schengen visa rejection and how to avoid them in your application.",
    content: "",
    date: 1708500000n,
    author: "Priya Consultant",
    category: "Tips & Advice",
  },
  {
    id: 5n,
    title: "Australia PR: Subclass 189 vs 190 — Which is Right for You?",
    summary:
      "A detailed comparison of Australia's two main skilled migration pathways to help you choose the best route for your profile.",
    content: "",
    date: 1708000000n,
    author: "WorldGate Team",
    category: "Country Guides",
  },
  {
    id: 6n,
    title: "From Hyderabad to Dubai: How Iqbal Got His UAE Work Visa",
    summary:
      "A client success story about securing a high-paying UAE job offer and work visa in just 6 weeks with WorldGate's assistance.",
    content: "",
    date: 1707500000n,
    author: "WorldGate Team",
    category: "Success Stories",
  },
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const date = new Date(Number(post.date) * 1000);
  const dateStr = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="bg-navy-mid rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1 flex flex-col"
      data-ocid={`blog.item.${index + 1}`}
    >
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.73 0.12 75), oklch(0.60 0.12 75))",
        }}
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-gold/15 text-gold border-0 text-xs font-body hover:bg-gold/20">
            <Tag size={10} className="mr-1" />
            {post.category}
          </Badge>
        </div>
        <h3 className="font-display font-bold text-white text-lg leading-snug mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-white/55 font-body text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {post.summary}
        </p>
        <div className="flex items-center gap-4 text-white/35 text-xs font-body mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={11} /> {dateStr}
          </span>
          <span className="flex items-center gap-1">
            <User size={11} /> {post.author}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-gold/30 text-gold hover:bg-gold/10 font-body w-full"
          data-ocid="blog.secondary_button"
        >
          Read More <ArrowRight size={13} className="ml-1" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: posts, isLoading } = useGetBlogPostsByCategory(activeCategory);
  const display = posts && posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className="pt-20">
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.06 255) 0%, oklch(0.18 0.07 255) 100%)",
        }}
        data-ocid="blog.section"
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
              Visa & Immigration Blog
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-white/65 font-body text-lg max-w-2xl mx-auto">
              Latest news, updates, and expert advice on visas and immigration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-navy font-semibold"
                    : "bg-navy-mid border border-white/15 text-white/65 hover:text-gold hover:border-gold/30"
                }`}
                data-ocid="blog.tab"
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="blog.loading_state"
            >
              {SKELETON_KEYS.map((k) => (
                <Skeleton key={k} className="h-72 rounded-2xl bg-navy-light" />
              ))}
            </div>
          ) : display.length === 0 ? (
            <div
              className="text-center py-20 text-white/40 font-body"
              data-ocid="blog.empty_state"
            >
              No posts found in this category.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {display.map((post, i) => (
                <BlogCard key={String(post.id)} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
