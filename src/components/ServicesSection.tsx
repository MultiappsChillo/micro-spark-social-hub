
import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Camera, Tag, ShoppingBag } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Mode-Influencer Matching",
      description: "Wir verbinden Ihre Mode-Marke mit style-fokussierten Micro-Influencern, die Ihre Ästhetik verkörpern und Ihre Zielgruppe ansprechen.",
      icon: <Shirt className="h-12 w-12" />,
      color: "from-rose-500 to-pink-400"
    },
    {
      title: "Style-Kampagnen Strategie",
      description: "Unser Team entwickelt mode-fokussierte Kampagnen, die Ihre Kollektionen präsentieren und das Engagement style-bewusster Zielgruppen steigern.",
      icon: <Tag className="h-12 w-12" />,
      color: "from-violet-500 to-purple-400"
    },
    {
      title: "Mode-Content Erstellung",
      description: "Wir unterstützen Creator bei der Produktion hochwertiger Mode-Inhalte, die Ihre Marke hervorheben und dabei authentisch bleiben.",
      icon: <Camera className="h-12 w-12" />,
      color: "from-fuchsia-500 to-pink-400"
    },
    {
      title: "Mode-Marketing Analyse",
      description: "Verfolgen Sie Kampagnenleistung, Engagement-Metriken und Verkaufskonversionsraten mit unserer detaillierten mode-fokussierten Analytik.",
      icon: <ShoppingBag className="h-12 w-12" />,
      color: "from-rose-400 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Unsere Mode-Marketing Leistungen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-violet-500 mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            Wir sind spezialisiert darauf, Mode-Marken mit authentischen Micro-Influencern zu verbinden, um beeindruckende Kampagnen zu erstellen, die style-bewusste Zielgruppen ansprechen.
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
