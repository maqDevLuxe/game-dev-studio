/* ===== Section 1: Hero with parallax game background ===== */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import editorMockup from "@/assets/editor-mockup.jpg";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      const layers = parallaxRef.current.querySelectorAll<HTMLElement>(".parallax-layer");
      layers.forEach((layer, i) => {
        const speed = (i + 1) * 0.15;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Multi-layered parallax background */}
      <div ref={parallaxRef} className="absolute inset-0">
        {/* Layer 1 - Deep background */}
        <div className="parallax-layer absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        {/* Layer 2 - Game art */}
        <div className="parallax-layer absolute inset-0 opacity-30">
          <img src={heroBg} alt="Game background" className="w-full h-full object-cover" />
        </div>
        {/* Layer 3 - Gradient overlay */}
        <div className="parallax-layer absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs font-semibold text-secondary">No Code Required</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Build Browser Games{" "}
              <span className="text-gradient-yellow">Visually</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Drag, drop, and publish. GameForge is the professional no-code platform
              that turns your game ideas into reality — no programming skills needed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <Sparkles className="w-4 h-4" />
                Start Building Free
              </Button>
              <Button variant="hero-outline" size="lg">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
            {/* Social proof */}
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span>✓ Free tier forever</span>
              <span>✓ No credit card</span>
              <span>✓ Publish instantly</span>
            </div>
          </motion.div>

          {/* Right - Editor mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl glow-purple">
              <img
                src={editorMockup}
                alt="GameForge drag-and-drop editor"
                className="w-full"
              />
            </div>
            {/* Floating UI elements - bouncing */}
            <div className="absolute -top-4 -right-4 bounce-slow glass-card px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-xs font-medium text-foreground">60 FPS</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bounce-delayed glass-card px-3 py-2">
              <span className="text-xs font-medium text-secondary">🎮 Drag & Drop</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
