import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon 
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
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations 
            and achieve remarkable results through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-custom-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevProject}
                className="rounded-full p-2"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2 items-center">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentProject
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextProject}
                className="rounded-full p-2"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                      CLIENT
                    </h4>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                      DURATION
                    </h4>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                    KEY RESULTS
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="btn-hero-primary group">
                  View Case Study
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}