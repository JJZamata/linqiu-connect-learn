import { Linkedin, Instagram, Youtube } from "lucide-react";
import logoLinqiu from "@/assets/LogoLinqiu.png";

const Footer = () => {
  const footerLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Equipo", href: "#team" },
    { name: "Términos", href: "#terms" },
    { name: "Política de Privacidad", href: "#privacy" },
    { name: "Contacto", href: "#contact" },
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
          <div className="flex items-center justify-center">
            <img
              src={logoLinqiu}
              alt="LinQiu"
              className="h-10 w-auto rounded-full border-white/20"
            />
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
            <p>Una iniciativa de Novalink © 2025 — Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
