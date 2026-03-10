/* ===== Reusable Section Heading ===== */
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const SectionHeading = ({ badge, title, highlight, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12 md:mb-16"
  >
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4 border border-primary/20">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
      {title}{" "}
      {highlight && <span className="text-gradient-yellow">{highlight}</span>}
    </h2>
    {description && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
