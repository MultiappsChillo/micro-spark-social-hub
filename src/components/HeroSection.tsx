
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-br from-agency-lightblue/30 to-violet-100/30 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-agency-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-agency-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-agency-blue to-agency-purple">Micro-Influencers</span> With Major Brands
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              We help brands leverage the authentic reach of micro-influencers for high-impact campaigns that resonate with targeted audiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-gradient-to-r from-agency-blue to-agency-purple hover:opacity-90 text-lg py-6 px-8">
                Work With Us
              </Button>
              <Button variant="outline" className="border-agency-blue text-agency-blue hover:bg-agency-lightblue/50 text-lg py-6 px-8">
                Join As Creator
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-${200 + i*100}`}></div>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium">500+ Creators</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-gray-${200 + i*100}`}>
                      <span className="text-xs font-bold text-white">B</span>
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium">50+ Brand Partners</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Content creator with laptop" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-agency-blue to-agency-purple rounded-lg rotate-6 shadow-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-bl from-agency-purple to-agency-blue rounded-lg -rotate-12 shadow-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
