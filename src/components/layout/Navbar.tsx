import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Bars3Icon, 
  XMarkIcon,
  CodeBracketIcon,
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  CubeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/about", icon: UserGroupIcon },
  { name: "Services", href: "/services", icon: CogIcon },
  { name: "Products", href: "/products", icon: CubeIcon },
  { name: "Careers", href: "/careers", icon: BriefcaseIcon },
  { name: "Blog", href: "/blog", icon: DocumentTextIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                    <CodeBracketIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
                </div>
                <span className="text-2xl font-bold text-gradient">TechFlow</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </span>
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gradient-primary/20 rounded-lg"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Button className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote
                </Button>
              </motion.div>
              
              {/* Mobile Sheet Menu */}
              <div className="lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <Bars3Icon className="w-6 h-6" />
                    </motion.button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 bg-background/95 backdrop-blur-xl border-r border-border/50">
                    <div className="flex flex-col h-full">
                      {/* Logo in Sheet */}
                      <div className="flex items-center space-x-3 mb-8 mt-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <CodeBracketIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gradient">TechFlow</span>
                      </div>

                      {/* Navigation Links */}
                      <nav className="flex-1">
                        <div className="space-y-2">
                          {navItems.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Link
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                                  location.pathname === item.href
                                    ? "text-primary bg-gradient-primary/10 border border-primary/20"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                              >
                                <item.icon className="w-5 h-5" />
                                <span>{item.name}</span>
                                {location.pathname === item.href && (
                                  <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </nav>

                      {/* CTA in Sheet */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 mb-4"
                      >
                        <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg">
                          Get Quote
                        </Button>
                      </motion.div>

                      {/* Contact Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-center text-sm text-muted-foreground border-t border-border/50 pt-4"
                      >
                        <p>hello@techflow.com</p>
                        <p>+1 (555) 123-4567</p>
                      </motion.div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />
    </>
  );
}