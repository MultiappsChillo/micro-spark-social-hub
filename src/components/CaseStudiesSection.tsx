
import { useState } from "react";

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(0);
  
  const caseStudies = [
    {
      title: "Luxury Fashion Brand Summer Collection Launch",
      brand: "ELEGANCE",
      stats: {
        reach: "3.5M+",
        engagement: "9.2%",
        conversion: "15%",
        roi: "450%"
      },
      description: "Orchestrated a coordinated campaign with 30 fashion micro-influencers to showcase a luxury summer collection, resulting in record-breaking engagement and sales.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Luxury Fashion"
    },
    {
      title: "Sustainable Fashion Awareness Campaign",
      brand: "EcoStyle",
      stats: {
        reach: "2.8M+",
        engagement: "8.7%",
        conversion: "12%",
        roi: "380%"
      },
      description: "Helped a sustainable fashion brand increase market awareness through strategic partnerships with eco-conscious fashion influencers.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Sustainable Fashion"
    },
    {
      title: "Streetwear Collection Drop",
      brand: "UrbanPulse",
      stats: {
        reach: "4.2M+",
        engagement: "11.3%",
        conversion: "18%",
        roi: "520%"
      },
      description: "Launched a viral streetwear collection through collaborations with urban style micro-influencers, creating massive social media buzz.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      category: "Streetwear"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-blue to-agency-purple mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            Explore how we've helped brands achieve remarkable results through strategic micro-influencer campaigns.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                activeCase === index ? "ring-2 ring-agency-blue transform scale-[1.02]" : "hover:shadow-xl"
              }`}
              onClick={() => setActiveCase(index)}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="px-4 py-1 bg-black/70 text-white text-sm rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 font-medium mb-2">{caseStudy.brand}</div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{caseStudy.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{caseStudy.description}</p>
                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-agency-blue font-bold">{caseStudy.stats.reach}</div>
                    <div className="text-xs text-gray-500">Reach</div>
                  </div>
                  <div>
                    <div className="text-agency-blue font-bold">{caseStudy.stats.engagement}</div>
                    <div className="text-xs text-gray-500">Engagement</div>
                  </div>
                  <div>
                    <div className="text-agency-blue font-bold">{caseStudy.stats.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Detailed view of selected case study */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="inline-block px-3 py-1 bg-agency-blue/10 text-agency-blue rounded-full text-sm font-medium mb-4">
                {caseStudies[activeCase].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{caseStudies[activeCase].title}</h3>
              <div className="text-lg text-agency-blue font-medium mb-4">{caseStudies[activeCase].brand}</div>
              <p className="text-gray-600 mb-6">{caseStudies[activeCase].description}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-agency-blue">{caseStudies[activeCase].stats.reach}</div>
                  <div className="text-sm text-gray-500">Total Reach</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-agency-blue">{caseStudies[activeCase].stats.engagement}</div>
                  <div className="text-sm text-gray-500">Engagement Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-agency-blue">{caseStudies[activeCase].stats.conversion}</div>
                  <div className="text-sm text-gray-500">Conversion Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-agency-blue">{caseStudies[activeCase].stats.roi}</div>
                  <div className="text-sm text-gray-500">Return on Investment</div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden h-[400px]">
                <img 
                  src={caseStudies[activeCase].image} 
                  alt={caseStudies[activeCase].title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
