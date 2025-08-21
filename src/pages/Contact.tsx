import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HeroButton } from "@/components/ui/button-variants";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Contact LoadStack
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team. We're here to help optimize your logistics journey across India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground">support@loadstack.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        LoadStack India Pvt. Ltd.<br />
                        Mumbai, Maharashtra<br />
                        India 400001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-2xl font-semibold text-primary mb-4">About LoadStack</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-primary">Mission:</strong> Optimizing Indian logistics by sharing truck space across Bharat's vast highway network.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We connect truck owners (lorry operators) with traders and shippers, reducing empty trips and maximizing transport efficiency across India.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">1000+</div>
                    <div className="text-sm text-muted-foreground">Active Trucks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Registered Traders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">25</div>
                    <div className="text-sm text-muted-foreground">States Covered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="h-12" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="h-12" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="h-12" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" className="h-12" placeholder="+91 98765 43210" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" className="h-12" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <HeroButton variant="find-load" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </HeroButton>
              </form>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-12 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-primary mb-4">LoadStack</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing Indian logistics by sharing truck space across Bharat.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>About LoadStack</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Support</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-4">Legal</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Copyright © 2025 LoadStack Bharat</p>
                  <p>All rights reserved</p>
                  <p>Registered in India</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}