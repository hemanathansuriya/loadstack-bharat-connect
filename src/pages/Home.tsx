import { useNavigate } from "react-router-dom";
import { ArrowRight, Truck, Package, MapPin, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { HeroButton } from "@/components/ui/button-variants";
import { ProgressStack } from "@/components/ProgressStack";
import heroImage from "@/assets/hero-trucks.jpg";

const features = [
  {
    icon: TrendingUp,
    title: "Live Container Fill View",
    description: "Real-time visual status showing how full trucks and containers are across India."
  },
  {
    icon: Package,
    title: "Smart Matchmaking",
    description: "Advanced algorithm pairs trucks with compatible traders for optimal route efficiency."
  },
  {
    icon: MapPin,
    title: "Flexible Pricing",
    description: "Auto price suggestions in ₹ INR based on distance, weight, and available space."
  },
  {
    icon: Truck,
    title: "Real-time Tracking",
    description: "Follow truck journeys on live Indian highway routes with GPS precision."
  }
];

const steps = [
  {
    step: "01",
    title: "Post Your Space",
    description: "Truck owners post available space and planned route across Indian highways."
  },
  {
    step: "02", 
    title: "Find Your Match",
    description: "Traders request to fill trucks with their maal (goods) for the same route."
  },
  {
    step: "03",
    title: "Price & Confirm",
    description: "Smart pricing in ₹ INR calculated and shared based on distance and load."
  },
  {
    step: "04",
    title: "Optimize & Go",
    description: "Truck departs when optimally filled - maximize profit, minimize empty runs."
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Indian trucks on highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Share Your <span className="text-accent">Truck Space.</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white/90 mb-8">
                Maximize Every Mile.
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-lg">
                Connect with traders across Bharat. Optimize transport costs, reduce empty trips, 
                and build the future of Indian logistics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <HeroButton 
                  variant="post-truck" 
                  onClick={() => navigate("/post-truck")}
                >
                  Post a Truck
                </HeroButton>
                <HeroButton 
                  variant="find-load" 
                  onClick={() => navigate("/post-load")}
                >
                  Find a Load
                </HeroButton>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ProgressStack fillPercentage={65} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Revolutionizing Indian Logistics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LoadStack optimizes truck space sharing across India's vast highway network, 
              connecting lorry owners with traders for maximum efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <feature.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How LoadStack Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to connect truck owners and traders across Indian highways.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 h-full hover-lift">
                  <div className="text-6xl font-bold text-accent/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Transport?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of truck owners and traders already using LoadStack across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <HeroButton 
              variant="find-load" 
              onClick={() => navigate("/post-load")}
            >
              Get Started Today
            </HeroButton>
          </div>
        </div>
      </section>
    </div>
  );
}