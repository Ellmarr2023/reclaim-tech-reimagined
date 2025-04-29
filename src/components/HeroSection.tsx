
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Save to Supabase waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name, email }]);
        
      if (error) throw error;
      
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Error saving to waitlist:", error);
      toast.error("There was a problem adding you to the waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
              <div>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="flex-grow"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-label="Enter your name to join the waitlist"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Enter your email address to join the waitlist"
                />
                <Button 
                  type="submit" 
                  className="bg-reclaim-green hover:bg-reclaim-green/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Get Early Access"}
                </Button>
              </div>
            </form>
            
            <p className="text-sm text-reclaim-darkgray/70">
              Enter your name and email to join our waitlist. Limited spots available for beta testers!
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
