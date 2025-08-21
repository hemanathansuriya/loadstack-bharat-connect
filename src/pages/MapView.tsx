import { useState } from "react";
import { MapPin, Truck, Package, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for demonstration
const truckData = [
  { id: 1, location: "Mumbai", lat: 19.0760, lng: 72.8777, type: "truck", capacity: "15 tons", fill: 40, route: "Mumbai → Pune", price: "₹25/km" },
  { id: 2, location: "Delhi", lat: 28.6139, lng: 77.2090, type: "truck", capacity: "20 tons", fill: 70, route: "Delhi → Jaipur", price: "₹30/km" },
  { id: 3, location: "Bangalore", lat: 12.9716, lng: 77.5946, type: "truck", capacity: "12 tons", fill: 20, route: "Bangalore → Chennai", price: "₹28/km" },
  { id: 4, location: "Chennai", lat: 13.0827, lng: 80.2707, type: "load", weight: "8 tons", goods: "Electronics", destination: "Hyderabad", budget: "₹15,000" },
  { id: 5, location: "Kolkata", lat: 22.5726, lng: 88.3639, type: "load", weight: "5 tons", goods: "Textiles", destination: "Mumbai", budget: "₹20,000" },
  { id: 6, location: "Pune", lat: 18.5204, lng: 73.8567, type: "truck", capacity: "18 tons", fill: 60, route: "Pune → Mumbai", price: "₹22/km" }
];

export default function MapView() {
  const [filter, setFilter] = useState("all");
  const [selectedPin, setSelectedPin] = useState<any>(null);

  const filteredData = truckData.filter(item => 
    filter === "all" || item.type === filter
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <MapPin className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">
              Live Map View
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time view of available trucks and loads across India.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="truck">Trucks Only</SelectItem>
                <SelectItem value="load">Loads Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 rounded-3xl h-[600px] relative">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  {/* India Map Background */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-24 w-24 text-accent/50 mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground mb-2">Interactive Map View</p>
                      <p className="text-sm text-muted-foreground">
                        Click on pins below to see details
                      </p>
                    </div>
                  </div>
                  
                  {/* Simulated Map Pins */}
                  <div className="absolute inset-0 pointer-events-none">
                    {filteredData.map((item, index) => (
                      <div
                        key={item.id}
                        className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transition-transform hover:scale-125 ${
                          item.type === 'truck' ? 'bg-primary' : 'bg-accent'
                        }`}
                        style={{
                          left: `${20 + (index % 3) * 25}%`,
                          top: `${20 + Math.floor(index / 3) * 20}%`
                        }}
                        onClick={() => setSelectedPin(item)}
                      >
                        {item.type === 'truck' ? 
                          <Truck className="h-4 w-4 text-white m-2" /> :
                          <Package className="h-4 w-4 text-white m-2" />
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-primary mb-4">Map Legend</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Truck className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Available Trucks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Package className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Loads Waiting</span>
                  </div>
                </div>
              </div>

              {/* Selected Pin Details */}
              {selectedPin && (
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    {selectedPin.type === 'truck' ? 
                      <Truck className="h-6 w-6 text-primary" /> :
                      <Package className="h-6 w-6 text-accent" />
                    }
                    <h3 className="text-lg font-semibold text-primary">
                      {selectedPin.type === 'truck' ? 'Truck Details' : 'Load Details'}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{selectedPin.location}</span>
                    </div>
                    
                    {selectedPin.type === 'truck' ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capacity:</span>
                          <span className="font-medium">{selectedPin.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fill Status:</span>
                          <span className="font-medium">{selectedPin.fill}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Route:</span>
                          <span className="font-medium">{selectedPin.route}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium text-accent">{selectedPin.price}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="font-medium">{selectedPin.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Goods:</span>
                          <span className="font-medium">{selectedPin.goods}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Destination:</span>
                          <span className="font-medium">{selectedPin.destination}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium text-accent">{selectedPin.budget}</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <Button className="w-full mt-4 bg-gradient-accent">
                    Contact {selectedPin.type === 'truck' ? 'Driver' : 'Shipper'}
                  </Button>
                </div>
              )}

              {/* Quick Stats */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-4">Live Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      {truckData.filter(item => item.type === 'truck').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Active Trucks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {truckData.filter(item => item.type === 'load').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Pending Loads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}