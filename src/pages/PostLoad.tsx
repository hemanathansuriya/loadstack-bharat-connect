import { useState } from "react";
import { Package, MapPin, Calendar, Weight, Upload } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeroButton } from "@/components/ui/button-variants";

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
  "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur",
  "Nagpur", "Indore", "Bhopal", "Visakhapatnam", "Patna", "Vadodara",
  "Ghaziabad", "Ludhiana", "Rajkot", "Nashik", "Faridabad", "Meerut"
];

const goodsTypes = [
  "Electronics", "Textiles", "Automotive Parts", "Food Products",
  "Chemicals", "Pharmaceuticals", "Steel/Metal", "Cement",
  "Furniture", "Machinery", "Consumer Goods", "Others"
];

export default function PostLoad() {
  const [formData, setFormData] = useState({
    pickupCity: "",
    dropoffCity: "",
    weight: "",
    goodsType: "",
    deadline: "",
    description: "",
    contactPhone: "",
    priceRange: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Load posted:", formData);
    // Here you would typically send to backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Package className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">
              Post Your Load
            </h1>
            <p className="text-xl text-muted-foreground">
              Find trucks to transport your maal across India efficiently.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Route Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-accent" />
                  Route Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup City</Label>
                    <Select value={formData.pickupCity} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, pickupCity: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select pickup city" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dropoff">Drop-off City</Label>
                    <Select value={formData.dropoffCity} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, dropoffCity: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select drop-off city" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Load Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary flex items-center">
                  <Weight className="h-6 w-6 mr-2 text-accent" />
                  Load Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="e.g., 1500"
                      value={formData.weight}
                      onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goodsType">Type of Goods</Label>
                    <Select value={formData.goodsType} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, goodsType: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select goods type" />
                      </SelectTrigger>
                      <SelectContent>
                        {goodsTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline Date</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="priceRange">Budget (₹ INR)</Label>
                    <Input
                      id="priceRange"
                      type="text"
                      placeholder="e.g., ₹15,000 - ₹20,000"
                      value={formData.priceRange}
                      onChange={(e) => setFormData(prev => ({ ...prev, priceRange: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary">Additional Details</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide additional details about your goods, special handling requirements, etc."
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                    />
                  </div>
                  
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
                </div>
              </div>

              {/* Photo Upload */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-primary flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-accent" />
                  Upload Goods Photo (Optional)
                </Label>
                <div className="glass-card p-8 text-center border-2 border-dashed border-muted-foreground/30 hover:border-accent transition-colors">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="pt-6">
                <HeroButton variant="find-load" className="w-full">
                  Post Load Request
                </HeroButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}