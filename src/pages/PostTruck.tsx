import { useState } from "react";
import { Truck, MapPin, Calendar, Weight, IndianRupee } from "lucide-react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { HeroButton } from "@/components/ui/button-variants";

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
  "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur",
  "Nagpur", "Indore", "Bhopal", "Visakhapatnam", "Patna", "Vadodara"
];

const truckTypes = [
  "Mini Truck (1-2 tons)", "Small Truck (3-4 tons)", "Medium Truck (5-9 tons)",
  "Large Truck (10-16 tons)", "14-Wheeler (16-25 tons)", "Container Truck (25+ tons)",
  "Trailer (40+ tons)", "Refrigerated Truck", "Open Body Truck"
];

export default function PostTruck() {
  const [formData, setFormData] = useState({
    truckType: "",
    capacity: "",
    currentLocation: "",
    destination: "",
    route: "",
    availableDate: "",
    pricePerKm: "",
    pricePerTon: "",
    contactPhone: "",
    description: ""
  });
  
  const [fillPercentage, setFillPercentage] = useState([0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Truck posted:", { ...formData, fillPercentage: fillPercentage[0] });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Truck className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">
              Post Your Truck
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your truck space and maximize earnings on every journey.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Truck Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary flex items-center">
                  <Truck className="h-6 w-6 mr-2 text-accent" />
                  Truck Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="truckType">Truck Type</Label>
                    <Select value={formData.truckType} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, truckType: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select truck type" />
                      </SelectTrigger>
                      <SelectContent>
                        {truckTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Total Capacity (tons)</Label>
                    <Input
                      id="capacity"
                      type="number"
                      placeholder="e.g., 15"
                      value={formData.capacity}
                      onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Current Fill Status */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary flex items-center">
                  <Weight className="h-6 w-6 mr-2 text-accent" />
                  Current Fill Status
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Truck Fill Percentage</Label>
                    <span className="text-2xl font-bold text-accent">{fillPercentage[0]}%</span>
                  </div>
                  <Slider
                    value={fillPercentage}
                    onValueChange={setFillPercentage}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Empty</span>
                    <span>Half Full</span>
                    <span>Full</span>
                  </div>
                  
                  {/* Visual Fill Indicator */}
                  <div className="glass-card p-4 rounded-xl">
                    <div className="grid grid-cols-10 gap-1 h-12">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded transition-all duration-300 ${
                            i < (fillPercentage[0] / 10) 
                              ? "bg-accent" 
                              : "bg-muted/50"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      {fillPercentage[0] === 0 ? "🚛 Empty truck - maximum space available" :
                       fillPercentage[0] < 50 ? "📦 Partial load - good space available" :
                       fillPercentage[0] < 90 ? "📋 Getting full - limited space" :
                       "✅ Nearly full - minimal space"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Route Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-accent" />
                  Route Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentLocation">Current Location</Label>
                    <Select value={formData.currentLocation} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, currentLocation: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select current city" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Select value={formData.destination} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, destination: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="route">Planned Route</Label>
                    <Input
                      id="route"
                      placeholder="e.g., Mumbai → Pune → Bangalore"
                      value={formData.route}
                      onChange={(e) => setFormData(prev => ({ ...prev, route: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="availableDate">Available Date/Time</Label>
                    <Input
                      id="availableDate"
                      type="datetime-local"
                      value={formData.availableDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, availableDate: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary flex items-center">
                  <IndianRupee className="h-6 w-6 mr-2 text-accent" />
                  Pricing (₹ INR)
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pricePerKm">Price per KM (₹)</Label>
                    <Input
                      id="pricePerKm"
                      type="number"
                      placeholder="e.g., 25"
                      value={formData.pricePerKm}
                      onChange={(e) => setFormData(prev => ({ ...prev, pricePerKm: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pricePerTon">Price per Ton (₹)</Label>
                    <Input
                      id="pricePerTon"
                      type="number"
                      placeholder="e.g., 1500"
                      value={formData.pricePerTon}
                      onChange={(e) => setFormData(prev => ({ ...prev, pricePerTon: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Contact & Additional Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary">Contact & Additional Info</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Notes</Label>
                    <Textarea
                      id="description"
                      placeholder="Any special requirements, truck specifications, or additional information..."
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <HeroButton variant="post-truck" className="w-full">
                  Post Truck Availability
                </HeroButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}