/* ===== Section 5: Asset Library Preview ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Image, Music, Box, Wand2 } from "lucide-react";

const categories = [
  { icon: Image, label: "Sprites & Tiles", count: "12,000+", color: "bg-primary/10 text-primary" },
  { icon: Music, label: "Sound Effects", count: "5,000+", color: "bg-secondary/10 text-secondary" },
  { icon: Box, label: "3D Models", count: "2,500+", color: "bg-primary/10 text-primary" },
  { icon: Wand2, label: "Particle FX", count: "800+", color: "bg-secondary/10 text-secondary" },
];

const AssetLibrary = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading
        badge="Asset Library"
        title="20,000+ Ready-Made"
        highlight="Assets"
        description="Sprites, sounds, particles, and 3D models — all royalty-free and ready to drag into your game."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <cat.icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{cat.label}</h3>
            <p className="text-2xl font-bold text-gradient-yellow">{cat.count}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AssetLibrary;
