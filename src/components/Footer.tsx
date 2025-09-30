import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@neo-nazareveli.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-3">
              NEO Nazareveli
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-lift"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@neo-nazareveli.com"
                  className="hover:text-foreground transition-colors"
                >
                  hello@neo-nazareveli.com
                </a>
              </li>
              <li>Georgia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} NEO Nazareveli. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
