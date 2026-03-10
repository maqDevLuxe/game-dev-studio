/* ===== Section 7: Multiplayer/Networking Tools ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Users, Radio, Shield, Server } from "lucide-react";

const tools = [
  { icon: Users, title: "Real-time Multiplayer", desc: "Up to 100 players per room with automatic state synchronization." },
  { icon: Radio, title: "Lobby System", desc: "Built-in matchmaking, room codes, and invite links out of the box." },
  { icon: Shield, title: "Anti-Cheat", desc: "Server-authoritative mode prevents common exploits automatically." },
  { icon: Server, title: "Managed Servers", desc: "Auto-scaling game servers worldwide. Zero DevOps required." },
];

const MultiplayerTools = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading
        badge="Multiplayer"
        title="Multiplayer Made"
        highlight="Simple"
        description="Add real-time multiplayer to any game with a few clicks. We handle the networking complexity."
      />
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tools.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex gap-4 group hover:border-secondary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <t.icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MultiplayerTools;
