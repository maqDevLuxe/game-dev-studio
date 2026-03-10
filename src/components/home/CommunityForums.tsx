/* ===== Section 12: Community & Forums ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { MessageCircle, Trophy, Calendar, Heart } from "lucide-react";

const communityFeatures = [
  { icon: MessageCircle, title: "Active Forums", desc: "Get help, share ideas, and connect with 120K+ game devs.", stat: "50K+ Posts" },
  { icon: Trophy, title: "Game Jams", desc: "Monthly competitions with prizes. Build, submit, and get feedback.", stat: "Weekly Events" },
  { icon: Calendar, title: "Live Workshops", desc: "Weekly live sessions with pro game designers and engine experts.", stat: "2x Weekly" },
  { icon: Heart, title: "Open Source", desc: "Community-contributed plugins, templates, and asset packs.", stat: "500+ Plugins" },
];

const CommunityForums = () => (
  <section className="py-20 md:py-28 bg-muted/20">
    <div className="section-container">
      <SectionHeading
        badge="Community"
        title="Join 120K+"
        highlight="Game Devs"
        description="A thriving community of creators, from hobbyists to indie studios."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center group hover:border-secondary/30 transition-all"
          >
            <f.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{f.desc}</p>
            <span className="text-sm font-bold text-gradient-yellow">{f.stat}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CommunityForums;
