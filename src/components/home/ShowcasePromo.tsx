/* ===== Section 9: Massive Game Showcase Promo ===== */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import showcasePromo from "@/assets/showcase-promo.jpg";

const ShowcasePromo = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src={showcasePromo}
          alt="Games built with GameForge"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent flex items-center">
          <div className="p-8 md:p-16 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See What Devs Are <span className="text-gradient-yellow">Building</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Thousands of games created by our community. From puzzle games to MMORPGs —
              all built without code.
            </p>
            <Link to="/showcase">
              <Button variant="hero" size="lg">
                Explore Showcase
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ShowcasePromo;
