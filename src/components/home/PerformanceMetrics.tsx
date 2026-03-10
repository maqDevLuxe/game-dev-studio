/* ===== Section 6: Engine Performance Metrics ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Gauge, Cpu, HardDrive, Wifi } from "lucide-react";

const metrics = [
  { icon: Gauge, value: "60", unit: "FPS", label: "Consistent frame rate", desc: "Hardware-accelerated WebGL rendering" },
  { icon: Cpu, value: "<2", unit: "ms", label: "Logic tick", desc: "Optimized event loop processing" },
  { icon: HardDrive, value: "<5", unit: "MB", label: "Runtime size", desc: "Tiny engine footprint" },
  { icon: Wifi, value: "<50", unit: "ms", label: "Network latency", desc: "Built-in multiplayer optimization" },
];

const PerformanceMetrics = () => (
  <section className="py-20 md:py-28 bg-muted/20">
    <div className="section-container">
      <SectionHeading
        badge="Performance"
        title="Blazing Fast,"
        highlight="60 FPS"
        description="Our engine is built for performance. Smooth gameplay on desktop and mobile, every time."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card p-6 text-center"
          >
            <m.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-4xl font-bold text-gradient-yellow">{m.value}</span>
              <span className="text-lg font-semibold text-secondary">{m.unit}</span>
            </div>
            <p className="text-sm font-medium text-foreground mb-1">{m.label}</p>
            <p className="text-xs text-muted-foreground">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PerformanceMetrics;
