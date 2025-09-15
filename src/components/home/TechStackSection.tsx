import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "@/data";

export default function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="text-gradient">Modern Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            We leverage cutting-edge technologies and industry-leading frameworks to build robust, 
            scalable solutions that drive innovation and deliver exceptional performance.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Latest Frameworks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Cloud-Native</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Enterprise Grade</span>
            </div>
          </div>
        </motion.div>

        {/* Continuous Scroll Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* First set of technologies */}
            {techStack.map((tech, index) => (
              <motion.div
                key={`first-${tech.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 bg-card border border-border rounded-2xl p-6 min-w-[200px] card-hover group"
              >
                <div 
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {techStack.map((tech, index) => (
              <motion.div
                key={`second-${tech.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 bg-card border border-border rounded-2xl p-6 min-w-[200px] card-hover group"
              >
                <div 
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}