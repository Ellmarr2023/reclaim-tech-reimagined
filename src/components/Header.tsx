
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Reclaim</span>
        </div>
        <Button variant="outline" className="hidden sm:flex">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
