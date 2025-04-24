
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamSection() {
  const team = [
    {
      name: "Sophia Weber",
      role: "Gründerin & CEO",
      bio: "Ehemalige Marketing-Führungskraft mit über 15 Jahren Erfahrung im Influencer-Marketing und Markenpartnerschaften.",
      initials: "SW"
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      bio: "Preisgekrönter Kreativer mit Hintergrund in digitaler Content-Strategie und Social-Media-Kampagnen.",
      initials: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Influencer Relations",
      bio: "Expertin für Talent-Management und Influencer-Partnerschaften mit umfangreichem Netzwerk in der Creator-Economy.",
      initials: "ER"
    },
    {
      name: "David Kim",
      role: "Analytics Director",
      bio: "Datenspezialist mit Fokus auf Kampagnen-Metriken, Zielgruppeneinblicke und Leistungsoptimierung.",
      initials: "DK"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Unser Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-blue to-agency-purple mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            Unsere Experten bringen jahrelange Branchenerfahrung mit, um Marken und Creators dabei zu helfen, bedeutungsvolle Partnerschaften aufzubauen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-agency-blue/20">
                <AvatarFallback className="bg-gradient-to-br from-agency-blue to-agency-purple text-white text-2xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-agency-blue font-medium mb-4">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
