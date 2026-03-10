/* ===== Section 11: Tutorials/Blog ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { BookOpen, Video, FileText, ArrowRight } from "lucide-react";

const tutorials = [
  { type: "Video", icon: Video, title: "Build a Platformer in 30 Minutes", category: "Beginner", duration: "30 min" },
  { type: "Article", icon: FileText, title: "Mastering the Physics Engine", category: "Intermediate", duration: "12 min read" },
  { type: "Guide", icon: BookOpen, title: "Multiplayer Best Practices", category: "Advanced", duration: "20 min read" },
];

const TutorialsBlog = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading
        badge="Learn"
        title="Tutorials &"
        highlight="Resources"
        description="From beginner guides to advanced techniques — everything you need to level up."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {tutorials.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="h-40 bg-muted/50 flex items-center justify-center">
              <t.icon className="w-12 h-12 text-primary/40 group-hover:text-primary transition-colors" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{t.category}</span>
                <span className="text-xs text-muted-foreground">{t.duration}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{t.title}</h3>
              <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TutorialsBlog;
