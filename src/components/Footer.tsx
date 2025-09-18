import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:hello@jaydoshi.dev',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Jay Doshi</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating exceptional digital experiences that make an impact.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jay Doshi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
