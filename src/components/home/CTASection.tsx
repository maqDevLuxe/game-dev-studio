/* ===== Section 14: Start Building CTA ===== */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Glow accents */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Build Your <span className="text-gradient-yellow">Dream Game</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join 120,000+ creators. Start free, publish everywhere, no code needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8">
              <Sparkles className="w-5 h-5" />
              Start Building Free
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8">
              Talk to Sales
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
