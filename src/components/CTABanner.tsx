
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isDismissed]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg transform transition-transform duration-500 ease-in-out">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-1 text-left pr-4">
          <p className="text-sm md:text-base font-medium">
            Ready to launch your next influencer campaign?
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            size="sm"
            className="bg-gradient-to-r from-agency-blue to-agency-purple hover:opacity-90 transition duration-300"
          >
            Get Started
          </Button>
          <button 
            onClick={handleDismiss}
            className="p-1 rounded-full hover:bg-gray-200 transition duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
