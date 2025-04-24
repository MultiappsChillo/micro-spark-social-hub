
import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Camera, Tag, ShoppingBag } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Fashion Influencer Matching",
      description: "We connect your fashion brand with style-focused micro-influencers who embody your aesthetic and resonate with your target audience.",
      icon: <Shirt className="h-12 w-12" />,
      color: "from-rose-500 to-pink-400"
    },
    {
      title: "Style Campaign Strategy",
      description: "Our team crafts fashion-focused campaigns that showcase your collections and drive engagement with style-conscious audiences.",
      icon: <Tag className="h-12 w-12" />,
      color: "from-violet-500 to-purple-400"
    },
    {
      title: "Fashion Content Creation",
      description: "We guide creators in producing high-quality fashion content that elevates your brand while maintaining authenticity.",
      icon: <Camera className="h-12 w-12" />,
      color: "from-fuchsia-500 to-pink-400"
    },
    {
      title: "Fashion Marketing Analytics",
      description: "Track campaign performance, engagement metrics, and sales conversion rates with our detailed fashion-focused analytics.",
      icon: <ShoppingBag className="h-12 w-12" />,
      color: "from-rose-400 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Fashion Marketing Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-violet-500 mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            We specialize in connecting fashion brands with authentic micro-influencers to create stunning campaigns that resonate with style-conscious audiences.
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
