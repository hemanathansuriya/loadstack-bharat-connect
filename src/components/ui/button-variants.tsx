import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Truck, Package } from "lucide-react";

interface HeroButtonProps {
  variant: "post-truck" | "find-load";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function HeroButton({ variant, children, className, onClick }: HeroButtonProps) {
  const Icon = variant === "post-truck" ? Truck : Package;
  
  return (
    <Button
      onClick={onClick}
      className={cn(
        "group relative h-14 px-8 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow",
        variant === "post-truck" 
          ? "bg-gradient-primary text-primary-foreground hover:shadow-primary"
          : "bg-gradient-accent text-accent-foreground hover:shadow-glow",
        className
      )}
    >
      <Icon className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
      {children}
    </Button>
  );
}

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function GlassButton({ children, className, variant = "primary", onClick }: GlassButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "glass-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105",
        variant === "primary" 
          ? "text-primary-foreground bg-primary/20 hover:bg-primary/30"
          : "text-foreground bg-background/20 hover:bg-background/30",
        className
      )}
    >
      {children}
    </button>
  );
}