import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCard from "@/components/ui/animated-card";
import SpotlightCard from "@/components/ui/spotlight-card";
import { 
  RocketLaunchIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const uspCards = [
  {
    icon: RocketLaunchIcon,
    title: "Scalable Solutions",
    description: "Built for growth with cloud-native architecture that scales seamlessly with your business needs.",
    gradient: "from-blue-500 to-purple-600",
    variant: "glow" as const
  },
  {
    icon: UserGroupIcon,
    title: "Expert Developers",
    description: "Our team of 50+ seasoned professionals brings decades of combined experience to every project.",
    gradient: "from-purple-500 to-pink-600",
    variant: "tilt" as const
  },
  {
    icon: ClockIcon,
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance to ensure your systems run smoothly at all times.",
    gradient: "from-green-500 to-blue-600",
    variant: "scale" as const
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards to protect your valuable data.",
    gradient: "from-red-500 to-orange-600",
    variant: "float" as const
  }
];

export default function USPSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full filter blur-3xl animate-pulse delay-75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            ⚡ Why Choose Us
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block"
            >
              Why Choose
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              TechFlow?
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We combine technical expertise with innovative thinking to deliver 
            solutions that don't just meet your needs—they exceed your expectations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uspCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
            >
              <SpotlightCard 
                className="h-full p-8 group relative overflow-hidden bg-gradient-to-br from-card to-muted/30 border border-border/50"
                spotlightColor="rgba(59, 130, 246, 0.2)"
              >
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 6 }}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "99.9%", label: "Uptime Guarantee", icon: "🚀" },
            { number: "< 24h", label: "Response Time", icon: "⚡" },
            { number: "50+", label: "Technologies", icon: "💻" },
            { number: "15+", label: "Countries Served", icon: "🌍" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                delay: 1.4 + index * 0.1, 
                duration: 0.8,
                type: "spring",
                bounce: 0.6
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border/50 backdrop-blur-sm group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}