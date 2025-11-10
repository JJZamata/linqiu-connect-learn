import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Team", href: "#team" },
    { name: "Terms", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-background">lin</span>
            <span className="text-primary">Q</span>
            <span className="text-background">iu</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-background/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-background/70 text-sm">
            <p>A Novalink initiative © 2025 — All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
