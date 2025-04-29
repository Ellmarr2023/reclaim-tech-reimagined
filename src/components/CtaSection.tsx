
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!firstName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setFirstName("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Reclaim</span> the Value of Your Tech?
          </h2>
          <p className="text-lg text-reclaim-darkgray mb-8">
            Join our exclusive waitlist today and be the first to know when we launch. Limited spots available for beta testers!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Your First Name"
              className="flex-grow"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="your.email@example.com"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-reclaim-green hover:bg-reclaim-green/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Join Waitlist"}
              </Button>
            </div>
            
            <p className="text-sm text-reclaim-darkgray/70 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
