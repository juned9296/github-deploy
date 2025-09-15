import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayIcon, SparklesIcon } from "@heroicons/react/24/outline";
import HeroBackground from "@/components/ui/hero-background";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background with Animation */}
      <HeroBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <SparklesIcon className="w-4 h-4 mr-2 animate-pulse" />
            🚀 Building Tomorrow's Technology Today
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="ml-2"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block mb-4"
              >
              <span className="text-white drop-shadow-lg">
                Transform
              </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="block mb-4"
              >
                Your Business
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="block relative"
              >
                with{" "}
                <span className="relative inline-block">
                  <span className="text-white drop-shadow-lg">
                    Innovation
                  </span>
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 h-2 bg-white/40 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 1.2, ease: "easeInOut" }}
                  />
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            We craft{" "}
            <motion.span
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-semibold text-white"
            >
              cutting-edge software solutions
            </motion.span>{" "}
            that drive innovation, scale your business, and deliver exceptional experiences that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-lg transition-all duration-300 text-lg group">
                <span className="flex items-center">
                  Start Your Journey
                  <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-10 py-6 rounded-2xl shadow-xl transition-all duration-300 text-lg group">
                <PlayIcon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Delivered", color: "from-primary to-secondary" },
              { number: "98%", label: "Client Satisfaction", color: "from-secondary to-accent" },
              { number: "24/7", label: "Support Available", color: "from-accent to-primary" },
              { number: "50+", label: "Expert Developers", color: "from-primary to-accent" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 2 + index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  animate={{ 
                    filter: [
                      "hue-rotate(0deg)",
                      "hue-rotate(360deg)"
                    ]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 2
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer hover:border-primary transition-colors duration-300"
        >
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}