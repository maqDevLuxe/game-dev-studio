/* ===== Engine Page ===== */
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Layers, Paintbrush, Cog, Gamepad2, Sparkles,
  Monitor, Code2, Boxes, Lightbulb, Puzzle, Joystick, Wand2
} from "lucide-react";
import editorMockup from "@/assets/editor-mockup.jpg";

const engineFeatures = [
  { icon: Layers, title: "Scene Editor", desc: "Multi-layer scene composition with z-ordering, parallax backgrounds, and tile-based level design." },
  { icon: Paintbrush, title: "Sprite Editor", desc: "Built-in pixel art editor with onion skinning, animation timeline, and sprite sheet generation." },
  { icon: Cog, title: "Physics Engine", desc: "Box2D-powered physics with gravity, collisions, joints, raycasting, and particle effects." },
  { icon: Gamepad2, title: "Input System", desc: "Universal input handling for keyboard, mouse, touch, and gamepad with rebindable controls." },
  { icon: Puzzle, title: "Plugin System", desc: "Extend the engine with community plugins or create your own. 500+ plugins available." },
  { icon: Wand2, title: "AI Assistant", desc: "Describe what you want in plain English and let AI generate the game logic for you." },
  { icon: Code2, title: "Code Mode", desc: "Drop into JavaScript when you need full control. Seamlessly mix visual and code logic." },
  { icon: Boxes, title: "Prefab System", desc: "Create reusable game objects with inherited properties. Change the template, update all instances." },
  { icon: Monitor, title: "Responsive Design", desc: "Automatic screen adaptation. Your game looks perfect on any device, any resolution." },
  { icon: Lightbulb, title: "Lighting System", desc: "Dynamic 2D lighting with shadows, ambient occlusion, and normal map support." },
  { icon: Joystick, title: "Animation System", desc: "Skeletal animation, tweening, sprite-sheet animation, and procedural motion — all visual." },
  { icon: Sparkles, title: "Particle System", desc: "GPU-accelerated particles with 50+ presets. Fire, smoke, rain, magic — one click away." },
];

const EnginePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero */}
    <section className="pt-32 pb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4 border border-primary/20">
            The Engine
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            A Professional Engine,{" "}
            <span className="text-gradient-yellow">Zero Code</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Everything you'd expect from a professional game engine — scene editor, physics, animation,
            particles, lighting — all accessible through an intuitive visual interface.
          </p>
          <Button variant="hero" size="lg">
            <Sparkles className="w-5 h-5" />
            Try the Engine Free
          </Button>
        </motion.div>

        {/* Editor screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-border/50 glow-purple mb-20"
        >
          <img src={editorMockup} alt="GameForge Engine Editor" className="w-full" />
        </motion.div>

        {/* Features grid */}
        <SectionHeading
          badge="Features"
          title="Everything You Need to"
          highlight="Create"
          description="12 core systems, infinitely combinable."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default EnginePage;
