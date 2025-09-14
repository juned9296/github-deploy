import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    description: "Built for growth with cloud-native architecture that scales seamlessly with your business needs."
  },
  {
    icon: UserGroupIcon,
    title: "Expert Developers",
    description: "Our team of 50+ seasoned professionals brings decades of combined experience to every project."
  },
  {
    icon: ClockIcon,
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance to ensure your systems run smoothly at all times."
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards to protect your valuable data."
  }
];

export default function USPSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-gradient">TechFlow</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with innovative thinking to deliver 
            solutions that don't just meet your needs—they exceed your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uspCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}