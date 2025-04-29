
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber.replace(/\D/g, ''))) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setPhoneNumber("");
      setIsLoading(false);
    }, 1000);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply formatting based on length
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Turn Your Old Electronics into
              <span className="gradient-text block"> Top Dollar, Effortlessly</span>
            </h1>
            
            <p className="text-lg md:text-xl text-reclaim-darkgray max-w-2xl">
              Reclaim uses AI image recognition to identify your device, scan the market for the highest price, 
              and auto-list it for you. Sign up for exclusive early access!
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="tel"
                placeholder="(123) 456-7890"
                className="flex-grow"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength={14}
                required
                aria-label="Enter your phone number to join the waitlist"
              />
              <Button 
                type="submit" 
                className="bg-reclaim-green hover:bg-reclaim-green/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Get Early Access"}
              </Button>
            </form>
            
            <p className="text-sm text-reclaim-darkgray/70">
              Enter your phone number to join our waitlist. Limited spots available for beta testers!
            </p>
          </div>
          
          <div className="flex-1 animate-fade-in-up">
            <div className="rounded-2xl shadow-2xl overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Reclaim App in Action" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
