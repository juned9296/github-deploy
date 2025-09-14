import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckIcon, ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-white/90">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Comprehensive software development services tailored to your business needs. 
              From web applications to AI solutions, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to help your 
              business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                {/* Background Icon */}
                <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{service.startingPrice}</p>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="btn-hero-primary group">
                          Learn More
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="text-3xl">{service.icon}</div>
                            <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                          </div>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>

                          <div>
                            <h4 className="font-semibold mb-3">All Features Included:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm">
                                  <CheckIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies We Use:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">Starting from</p>
                                <p className="text-3xl font-bold text-primary">{service.startingPrice}</p>
                              </div>
                              <Button className="btn-hero-primary">
                                Get Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need a <span className="text-gradient">Custom Solution</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating 
            custom software solutions tailored to your unique business requirements.
          </p>
          <Button className="btn-hero-primary">
            Discuss Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}