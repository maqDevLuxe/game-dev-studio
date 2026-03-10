/* ===== Section 3: Publish To Platforms ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Globe, Smartphone, Tablet } from "lucide-react";

const platforms = [
  { icon: Globe, label: "Web", desc: "HTML5, WebGL, instant browser play", color: "text-primary" },
  { icon: Smartphone, label: "iOS", desc: "Native wrapper, App Store ready", color: "text-secondary" },
  { icon: Tablet, label: "Android", desc: "Google Play, APK export", color: "text-glow-purple" },
];

const PublishPlatforms = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading
        badge="Cross-Platform"
        title="Publish Everywhere,"
        highlight="Instantly"
        description="One click to deploy your game across Web, iOS, and Android. No build tools, no app store headaches."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {platforms.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card p-8 text-center group cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${p.color}`}>
              <p.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{p.label}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PublishPlatforms;
