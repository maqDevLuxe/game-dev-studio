/* ===== Section 10: Platform Counters ===== */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 50000, label: "Games Created", suffix: "+" },
  { value: 120000, label: "Active Developers", suffix: "+" },
  { value: 15, label: "Million Players Monthly", suffix: "M" },
  { value: 99.9, label: "Uptime", suffix: "%" },
];

/* Animated counter hook */
const useCounter = (end: number, duration: number, isInView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isInView]);
  return count;
};

const formatNumber = (n: number) => {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "K";
  return n.toString();
};

const PlatformCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 md:py-28 bg-muted/20" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value, 2000, isInView);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-yellow mb-2">
                  {stat.value >= 1000 ? formatNumber(count) : count}
                  {stat.suffix !== "+" && stat.suffix !== "%" ? "" : ""}
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformCounters;
