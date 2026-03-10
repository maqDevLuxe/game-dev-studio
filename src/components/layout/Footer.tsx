/* ===== Footer Component ===== */
import { Link } from "react-router-dom";
import { Gamepad2, Github, Twitter, Youtube, MessageCircle } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Engine", path: "/engine" },
    { label: "Showcase", path: "/showcase" },
    { label: "Pricing", path: "#" },
    { label: "Changelog", path: "#" },
  ],
  Resources: [
    { label: "Documentation", path: "/docs" },
    { label: "Tutorials", path: "#" },
    { label: "Blog", path: "#" },
    { label: "API Reference", path: "#" },
  ],
  Community: [
    { label: "Discord", path: "#" },
    { label: "Forums", path: "#" },
    { label: "Game Jams", path: "#" },
    { label: "Events", path: "#" },
  ],
  Company: [
    { label: "About", path: "#" },
    { label: "Careers", path: "#" },
    { label: "Press", path: "#" },
    { label: "Contact", path: "#" },
  ],
};

const Footer = () => (
  <footer className="bg-muted/30 border-t border-border/50 pt-16 pb-8">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Game<span className="text-secondary">Forge</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            Build browser games without writing a single line of code.
          </p>
          <div className="flex gap-3">
            {[Twitter, Github, Youtube, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-muted/80 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-foreground mb-3">{category}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 GameForge. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
