import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "CloudFlow SaaS",
    description: "Complete business management platform with CRM, inventory, and analytics.",
    image: "/api/placeholder/600/400",
    features: ["Customer Management", "Inventory Tracking", "Real-time Analytics", "Multi-tenant", "API Integration"],
    pricing: { starter: "$29/month", professional: "$79/month", enterprise: "Custom" },
    category: "Business Management"
  },
  {
    id: 2,
    name: "DataViz Pro",
    description: "Advanced data visualization and business intelligence solution.",
    image: "/api/placeholder/600/400",
    features: ["Interactive Dashboards", "Custom Reports", "Data Connectors", "Team Collaboration", "White-label"],
    pricing: { starter: "$49/month", professional: "$129/month", enterprise: "Custom" },
    category: "Analytics"
  },
  {
    id: 3,
    name: "SecureAPI Gateway",
    description: "Enterprise-grade API management and security platform.",
    image: "/api/placeholder/600/400",
    features: ["API Security", "Rate Limiting", "Analytics", "Developer Portal", "Monitoring"],
    pricing: { starter: "$99/month", professional: "$299/month", enterprise: "Custom" },
    category: "Infrastructure"
  }
];

export default function Products() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Our <span className="text-white/90">Products</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Discover our suite of innovative software products designed to 
              streamline your business operations and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our flagship products that have helped thousands of businesses 
              optimize their operations and achieve their goals.
            </p>
          </motion.div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-custom-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                {/* Product Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-4">
                      KEY FEATURES
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-4">
                      PRICING PLANS
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(product.pricing).map(([plan, price]) => (
                        <div key={plan} className="bg-muted/50 rounded-lg p-3 min-w-[120px]">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {plan}
                          </p>
                          <p className="font-bold text-primary">{price}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-hero-primary group">
                      Try Free Demo
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                    <Button variant="outline">
                      View Pricing Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Choose the product that best fits your needs and start your free trial today. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
              Start Free Trial
            </Button>
            <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}