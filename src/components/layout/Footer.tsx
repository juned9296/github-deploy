import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  FacebookIcon
} from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services" },
      { name: "Mobile Apps", href: "/services" },
      { name: "Cloud Solutions", href: "/services" },
      { name: "UI/UX Design", href: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "SaaS Platform", href: "/products" },
      { name: "E-commerce", href: "/products" },
      { name: "Analytics Tool", href: "/products" },
      { name: "API Gateway", href: "/products" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Security", href: "/security" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: TwitterIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { name: "GitHub", icon: GithubIcon, href: "#" },
  { name: "Facebook", icon: FacebookIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <CodeBracketIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">TechFlow</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering businesses with cutting-edge software solutions. 
                We build scalable, innovative products that drive growth and success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span>hello@techflow.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest news and insights delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md w-full md:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="btn-hero-primary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} TechFlow. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}