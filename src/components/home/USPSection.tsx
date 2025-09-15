import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SpotlightCard from "@/components/ui/spotlight-card";
import whyChooseIllustration from "@/assets/why-choose-illustration.png";
import { 
  DocumentTextIcon,
  LightBulbIcon,
  CurrencyRupeeIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

const uspCards = [
  {
    icon: DocumentTextIcon,
    title: "Experience",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "top-left"
  },
  {
    icon: LightBulbIcon,
    title: "Products", 
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "bottom-left"
  },
  {
    icon: CurrencyRupeeIcon,
    title: "Pricing",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "top-right"
  },
  {
    icon: ClockIcon,
    title: "Delivery",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "bottom-right"
  }
];

export default function USPSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary font-poppins">
            Why Choose Us
          </h2>
          <p className="text-lg text-orange-500 font-medium font-inter">
            Lorem ipsum dolor sit amet
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <img
              src={whyChooseIllustration}
              alt="Why Choose Us"
              className="w-80 h-64 object-contain"
            />
          </motion.div>

          {/* Cards positioned around the center */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
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
                className={`
                  ${card.position === 'top-left' ? 'md:pr-20' : ''}
                  ${card.position === 'bottom-left' ? 'md:pr-20 md:pt-32' : ''}
                  ${card.position === 'top-right' ? 'md:pl-20' : ''}
                  ${card.position === 'bottom-right' ? 'md:pl-20 md:pt-32' : ''}
                `}
              >
                <SpotlightCard 
                  className="h-full p-8 group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  spotlightColor="rgba(16, 185, 129, 0.1)"
                >
                  <div className={`
                    flex items-start gap-4
                    ${card.position.includes('right') ? 'flex-row-reverse text-right' : 'flex-row text-left'}
                  `}>
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.1, rotate: 6 }}
                    >
                      <card.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300 font-poppins">
                        {card.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm font-inter">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}