/* ===== Section 8: Monetization Integrations ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { CreditCard, Gift, TrendingUp, ShoppingCart } from "lucide-react";

const integrations = [
  { icon: CreditCard, title: "In-App Purchases", desc: "Integrate payments with Stripe, PayPal, or platform-native billing." },
  { icon: Gift, title: "Rewarded Ads", desc: "AdMob, Unity Ads, and IronSource — toggle on with one click." },
  { icon: TrendingUp, title: "Analytics Dashboard", desc: "Track revenue, retention, DAU, and custom events in real-time." },
  { icon: ShoppingCart, title: "Virtual Store", desc: "Pre-built shop UI for skins, power-ups, and cosmetics." },
];

const Monetization = () => (
  <section className="py-20 md:py-28 bg-muted/20">
    <div className="section-container">
      <SectionHeading
        badge="Monetization"
        title="Turn Games Into"
        highlight="Revenue"
        description="Built-in monetization tools so you can earn from day one."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card p-6 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Monetization;
