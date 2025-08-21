import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressStackProps {
  fillPercentage?: number;
  className?: string;
}

export function ProgressStack({ fillPercentage = 60, className }: ProgressStackProps) {
  const [animatedFill, setAnimatedFill] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedFill(fillPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [fillPercentage]);

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className="mb-4">
        <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
          <span>Container Space</span>
          <span>{animatedFill}% Filled</span>
        </div>
        <div className="relative h-6 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-accent rounded-full transition-all duration-2000 ease-out"
            style={{ width: `${animatedFill}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
      
      {/* Container Visual */}
      <div className="relative">
        <div className="glass-card p-6 rounded-2xl">
          <div className="grid grid-cols-4 gap-2 h-24">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "rounded transition-all duration-300",
                  i < (animatedFill / 100) * 16
                    ? "bg-accent opacity-80"
                    : "bg-muted/50"
                )}
                style={{
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              {animatedFill < 30 ? "🚛 More space available" : 
               animatedFill < 70 ? "📦 Half full - good to go" : 
               "✅ Nearly full - optimal load"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}