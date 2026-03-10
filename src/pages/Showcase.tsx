/* ===== Showcase Page ===== */
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Eye, Gamepad2 } from "lucide-react";

const games = [
  { title: "Crystal Caverns", genre: "Platformer", plays: "1.2M", likes: "45K", color: "from-primary/30 to-accent/30" },
  { title: "Space Drifter", genre: "Shooter", plays: "890K", likes: "32K", color: "from-secondary/20 to-primary/20" },
  { title: "Tiny Kingdom", genre: "Strategy", plays: "2.1M", likes: "78K", color: "from-accent/30 to-primary/20" },
  { title: "Neon Runner", genre: "Endless Runner", plays: "650K", likes: "28K", color: "from-primary/20 to-secondary/20" },
  { title: "Puzzle Quest", genre: "Puzzle", plays: "1.5M", likes: "55K", color: "from-secondary/30 to-accent/20" },
  { title: "Shadow Blade", genre: "Action RPG", plays: "3.2M", likes: "120K", color: "from-accent/20 to-primary/30" },
  { title: "Farm Valley", genre: "Simulation", plays: "980K", likes: "41K", color: "from-primary/30 to-secondary/10" },
  { title: "Block Wars", genre: "Multiplayer", plays: "4.5M", likes: "190K", color: "from-secondary/20 to-accent/30" },
  { title: "Dragon Tamer", genre: "Adventure", plays: "750K", likes: "35K", color: "from-primary/20 to-accent/20" },
];

const ShowcasePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-4 border border-secondary/20">
            Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Games Built With{" "}
            <span className="text-gradient-yellow">GameForge</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore thousands of games created by our community — all built without code.
          </p>
        </motion.div>

        {/* Games grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Game thumbnail placeholder */}
              <div className={`h-48 bg-gradient-to-br ${game.color} flex items-center justify-center relative`}>
                <Gamepad2 className="w-16 h-16 text-foreground/20" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="w-8 h-8 bg-background/50 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{game.genre}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-secondary transition-colors">{game.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {game.plays}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {game.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="glow" size="lg">Load More Games</Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ShowcasePage;
