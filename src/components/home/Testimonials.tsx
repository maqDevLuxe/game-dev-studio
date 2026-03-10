/* ===== Section 13: Indie Dev Testimonials ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Indie Dev, Pixel Dreams Studio",
    quote: "GameForge let me publish my first game in a weekend. The drag-and-drop logic system is genuinely powerful — I didn't miss writing code at all.",
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Solo Developer",
    quote: "I've tried every no-code game tool out there. GameForge is the only one that doesn't feel like a toy. Real 60fps performance and actual multiplayer support.",
    avatar: "MR",
  },
  {
    name: "Yuki Tanaka",
    role: "Game Design Teacher",
    quote: "My students go from zero to published game in one semester. GameForge removed every technical barrier so they can focus on design and creativity.",
    avatar: "YT",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading
        badge="Testimonials"
        title="Loved by"
        highlight="Indie Devs"
        description="Don't just take our word for it — hear from the creators building with GameForge."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-6 italic leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
