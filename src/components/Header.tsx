
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Header = () => {
  const [open, setOpen] = useState(false);
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
      toast.error("Please enter your first name");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setFirstName("");
      setIsLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Reclaim</span>
        </div>
        <Button variant="outline" onClick={() => setOpen(true)} className="hidden sm:flex">
          Join Waitlist
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Enter your email and first name to get early access to Reclaim when we launch.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Join Waitlist"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
