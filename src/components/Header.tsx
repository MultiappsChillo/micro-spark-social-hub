
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-agency-blue to-agency-purple">
            MICRO-SPARK
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">Services</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">How it Works</a>
          <a href="#case-studies" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">Case Studies</a>
          <a href="#about" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">About Us</a>
          <Button className="bg-gradient-to-r from-agency-blue to-agency-purple hover:opacity-90 transition duration-300">
            Contact Us
          </Button>
        </nav>
        
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 p-4 shadow-xl border-t">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">How it Works</a>
            <a href="#case-studies" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">Case Studies</a>
            <a href="#about" className="text-gray-700 hover:text-agency-blue font-medium transition duration-300">About Us</a>
            <Button className="bg-gradient-to-r from-agency-blue to-agency-purple hover:opacity-90 w-full transition duration-300">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
