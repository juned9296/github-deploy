import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jobPositions } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MapPinIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  BuildingOfficeIcon 
} from "@heroicons/react/24/outline";

export default function Careers() {
  const [filter, setFilter] = useState("all");
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [jobsRef, jobsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredJobs = filter === "all" 
    ? jobPositions 
    : jobPositions.filter(job => 
        filter === "remote" ? job.remote : job.department.toLowerCase() === filter
      );

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Market-leading compensation packages" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical, dental, and vision" },
    { icon: "🏖️", title: "Flexible PTO", description: "Unlimited vacation and sick days" },
    { icon: "📚", title: "Learning Budget", description: "$2,000/year for professional development" },
    { icon: "🏠", title: "Remote Work", description: "Work from anywhere in the world" },
    { icon: "🚀", title: "Stock Options", description: "Equity participation in company growth" },
  ];

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
              Join Our <span className="text-white/90">Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for passionate individuals to help us build amazing things.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Work <span className="text-gradient">With Us</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, 
              grow, and do their best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section ref={jobsRef} className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next opportunity and help us build the future of software development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "engineering", "infrastructure", "remote"].map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className="capitalize"
              >
                {filterOption === "all" ? "All Positions" : filterOption}
              </Button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <Badge variant="secondary">{job.department}</Badge>
                      {job.remote && <Badge variant="outline">Remote</Badge>}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline">{job.location}</Badge>
                            {job.remote && <Badge variant="outline">Remote</Badge>}
                          </div>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-2">Job Description</h4>
                            <p className="text-muted-foreground">{job.description}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Requirements</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="text-muted-foreground text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Benefits</h4>
                            <ul className="space-y-1">
                              {job.benefits.map((benefit, idx) => (
                                <li key={idx} className="text-muted-foreground text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold">Ready to Apply?</p>
                                <p className="text-sm text-muted-foreground">Send us your resume and we'll be in touch.</p>
                              </div>
                              <Button className="btn-hero-primary">Apply Now</Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button className="btn-hero-primary">Apply Now</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No positions match your current filter.</p>
              <Button 
                variant="outline" 
                onClick={() => setFilter("all")} 
                className="mt-4"
              >
                View All Positions
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}