/* ===== Docs Page ===== */
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Code2, Puzzle, Gamepad2, Zap, Users, ChevronRight } from "lucide-react";

const docCategories = [
  { icon: BookOpen, title: "Getting Started", desc: "Installation, first project, editor overview.", articles: 12 },
  { icon: Gamepad2, title: "Game Objects", desc: "Sprites, tilemaps, cameras, and scene management.", articles: 24 },
  { icon: Zap, title: "Events & Logic", desc: "Visual scripting, conditions, loops, and variables.", articles: 31 },
  { icon: Code2, title: "Code Mode", desc: "JavaScript API reference and code integration.", articles: 18 },
  { icon: Puzzle, title: "Plugins", desc: "Installing, creating, and publishing plugins.", articles: 15 },
  { icon: Users, title: "Multiplayer", desc: "Networking, rooms, state sync, and anti-cheat.", articles: 9 },
];

const quickLinks = [
  "Quick Start Guide",
  "Event System Reference",
  "Physics API",
  "Animation Timeline",
  "Exporting Your Game",
  "Multiplayer Setup",
  "Plugin Development",
  "Keyboard Shortcuts",
];

const DocsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              <span className="text-gradient-yellow">Documentation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to master GameForge. Search or browse by category.
            </p>
            {/* Search bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
          </motion.div>

          {/* Category grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {docCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group cursor-pointer hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cat.desc}</p>
                    <span className="text-xs text-primary font-medium">{cat.articles} articles</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Popular Articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">{link}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Button variant="glow" size="lg">Ask the Community</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DocsPage;
