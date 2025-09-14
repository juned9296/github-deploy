import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/ui/spotlight-card";
import AnimatedCard from "@/components/ui/animated-card";
import { featuredProjects } from "@/data";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const project = featuredProjects[currentProject];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-3xl animate-pulse delay-75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 text-accent text-sm font-medium mb-8"
          >
            <EyeIcon className="w-4 h-4 mr-2" />
            🏆 Our Success Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block"
            >
              Featured
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-gradient bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
            >
              Success Stories
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Discover how we've helped businesses transform their operations 
            and achieve remarkable results through innovative technology solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <SpotlightCard 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  spotlightColor="rgba(6, 182, 212, 0.4)"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-6 left-6"
                    >
                      <Badge className="bg-gradient-to-r from-accent to-primary text-white font-semibold px-4 py-2 text-sm">
                        {project.category}
                      </Badge>
                    </motion.div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{project.client}</h4>
                      <p className="text-sm opacity-90">{project.duration}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </motion.button>
              
              <div className="flex space-x-3 items-center">
                {featuredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentProject(index)}
                    className={`transition-all duration-300 ${
                      index === currentProject
                        ? "w-8 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                        : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full"
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border/50">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">CLIENT</h4>
                    <p className="font-bold text-lg text-primary">{project.client}</p>
                  </div>
                  <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border/50">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">DURATION</h4>
                    <p className="font-bold text-lg text-secondary">{project.duration}</p>
                  </div>
                </div>

                {/* Technologies with Enhanced Design */}
                <div>
                  <h4 className="font-semibold text-muted-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></span>
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge className="bg-gradient-to-r from-muted to-muted/80 hover:from-primary/20 hover:to-secondary/20 text-foreground border border-border/50 px-4 py-2 transition-all duration-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Results with Icons */}
                <div>
                  <h4 className="font-semibold text-muted-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mr-3"></span>
                    KEY RESULTS
                  </h4>
                  <div className="space-y-3">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-base group"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="group-hover:text-primary transition-colors duration-300">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group text-lg">
                    <span className="flex items-center">
                      View Case Study
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}