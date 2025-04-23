
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Instagram, Share } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Influencer Matching",
      description: "We pair your brand with the perfect micro-influencers who align with your values and resonate with your target audience.",
      icon: <Users className="h-12 w-12" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Campaign Strategy",
      description: "Our team creates effective campaign strategies that maximize engagement and deliver measurable results for your brand.",
      icon: <MessageSquare className="h-12 w-12" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Creation",
      description: "We help creators produce high-quality, authentic content that drives engagement while staying true to your brand message.",
      icon: <Instagram className="h-12 w-12" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Performance Analytics",
      description: "Detailed reporting and analytics on campaign performance, engagement metrics, and ROI to measure success.",
      icon: <Share className="h-12 w-12" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-blue to-agency-purple mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            We offer comprehensive solutions for brands looking to leverage the authentic reach and engagement of micro-influencers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
