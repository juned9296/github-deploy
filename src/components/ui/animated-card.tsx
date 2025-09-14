import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glow" | "tilt" | "scale" | "gradient" | "float";
  delay?: number;
}

export default function AnimatedCard({ 
  children, 
  className, 
  variant = "default",
  delay = 0 
}: AnimatedCardProps) {
  const variants = {
    default: {
      hover: { y: -5, scale: 1.02 },
      tap: { scale: 0.98 }
    },
    glow: {
      hover: { 
        y: -8, 
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" 
      },
      tap: { scale: 0.97 }
    },
    tilt: {
      hover: { 
        y: -5, 
        rotateY: 5,
        rotateX: 5,
        scale: 1.02 
      },
      tap: { scale: 0.98 }
    },
    scale: {
      hover: { scale: 1.08, rotate: 1 },
      tap: { scale: 0.95 }
    },
    gradient: {
      hover: { 
        y: -10, 
        scale: 1.05,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      },
      tap: { scale: 0.96 }
    },
    float: {
      hover: { y: -12, scale: 1.04 },
      tap: { scale: 0.97 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={variants[variant].hover}
      whileTap={variants[variant].tap}
      className={cn(
        "bg-card border border-border rounded-2xl transition-all duration-300",
        variant === "glow" && "hover:border-primary/50",
        variant === "gradient" && "bg-gradient-to-br from-card to-muted/50",
        variant === "float" && "shadow-lg hover:shadow-2xl",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  );
}