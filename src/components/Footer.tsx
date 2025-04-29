
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">Reclaim</span>
          </div>
          <div className="text-sm text-reclaim-darkgray/70">
            © {currentYear} Reclaim. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
