import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gold">Corte & Arte</h3>
            <p className="text-foreground/60 text-sm mt-2">Estilo e precisão em cada detalhe</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:shadow-gold-sm transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground/70 hover:text-gold transition-smooth" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:shadow-gold-sm transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-foreground/70 hover:text-gold transition-smooth" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-gold hover:shadow-gold-sm transition-smooth"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 text-foreground/70 hover:text-gold transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-foreground/60 text-sm">
            <p>© 2025 Corte & Arte – Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
