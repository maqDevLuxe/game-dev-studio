/* ===== Section 4: No-code Logic Features ===== */
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Workflow, Zap, GitBranch, RotateCcw, Layers, MousePointerClick } from "lucide-react";

const features = [
  { icon: Workflow, title: "Visual Event System", desc: "Wire up game logic with a flowchart-style event editor. If-then conditions, loops, and triggers — all drag-and-drop." },
  { icon: Zap, title: "Behavior Blocks", desc: "Pre-built behavior modules for physics, AI pathfinding, camera follow, and more. Stack them like LEGO." },
  { icon: GitBranch, title: "State Machines", desc: "Design complex character states visually. Idle → Run → Jump → Attack with clean transition arrows." },
  { icon: RotateCcw, title: "Live Preview", desc: "Test your logic changes instantly. Edit while playing — no compile step, no waiting." },
  { icon: Layers, title: "Scene Management", desc: "Organize levels, menus, and cutscenes as layered scenes with easy transitions between them." },
  { icon: MousePointerClick, title: "Input Mapping", desc: "Keyboard, mouse, touch, and gamepad — configure all input methods in one unified panel." },
];

const LogicFeatures = () => (
  <section className="py-20 md:py-28 bg-muted/20">
    <div className="section-container">
      <SectionHeading
        badge="No-Code Logic"
        title="Game Logic Without"
        highlight="Code"
        description="Build complex game mechanics visually. Our event system is powerful enough for pros, simple enough for beginners."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LogicFeatures;
