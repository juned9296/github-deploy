import HeroSection from "@/components/home/HeroSection";
import USPSection from "@/components/home/USPSection";
import TechStackSection from "@/components/home/TechStackSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <USPSection />
      <TechStackSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
