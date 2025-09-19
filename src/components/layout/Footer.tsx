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
    title: "Services",
    links: [
      { name: "Web Design", href: "/services" },
      { name: "App Development", href: "/services" },
      { name: "Cloud Services", href: "/services" },
      { name: "Domain Adn Hosting", href: "/services" },
      { name: "Seo Optimization", href: "/services" },
      { name: "Social Media", href: "/services" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Team", href: "/team" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "FAQs", href: "/faqs" },
      { name: "Blogs", href: "/blog" },
      { name: "Blog Details", href: "/blog-details" },
      { name: "Coming Soon", href: "/coming-soon" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: TwitterIcon, href: "#" },
  { name: "Facebook", icon: FacebookIcon, href: "#" },  
  { name: "Instagram", icon: LinkedinIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Tech Circuit Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Animated Circuit Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/20 rounded-lg rotate-45 animate-pulse delay-75" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-150" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <CodeBracketIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient font-poppins">techno IT</span>
              </Link>
              
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4 font-poppins">
                  Follow us
                </h3>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center border border-gray-700 hover:border-primary"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="font-bold text-primary mb-6 text-lg font-poppins">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-inter hover:translate-x-1 transform transition-transform"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact & Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-primary mb-6 text-lg font-poppins">
                Contacts
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <span className="font-inter">101 West Town , PBO 12345, United States</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-4 h-4 text-primary" />
                  <span className="font-inter">+1 1234 56 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-4 h-4 text-primary" />
                  <span className="font-inter">contact@example.com</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-primary text-lg font-semibold mb-4 font-poppins">
                  Newsletter
                </h4>
                <p className="text-gray-300 text-sm mb-4 font-inter">
                  Don't miss to subscribe to our new feeds, kindly fill the form below.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0 font-inter">
            © {new Date().getFullYear()} TechFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}