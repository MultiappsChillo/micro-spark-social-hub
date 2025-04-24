
import { Button } from "@/components/ui/button";
import { Hanger, Diamond } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-br from-pink-50 to-violet-50 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-violet-500">Fashion Brand</span> With Elite Creators
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Connect with fashion-focused micro-influencers to create authentic style stories and drive engagement for your brand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-gradient-to-r from-rose-400 to-violet-500 hover:opacity-90 text-lg py-6 px-8">
                <Diamond className="mr-2 h-5 w-5" /> Partner With Us
              </Button>
              <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50 text-lg py-6 px-8">
                <Hanger className="mr-2 h-5 w-5" /> Join As Creator
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${1580000000000 + i}`}
                        alt="Fashion creator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium">500+ Fashion Creators</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${1590000000000 + i}`}
                        alt="Fashion brand"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium">50+ Fashion Brands</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Fashion content creator working on content" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-violet-500 rounded-lg rotate-6 shadow-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-bl from-violet-500 to-rose-400 rounded-lg -rotate-12 shadow-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
