
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamSection() {
  const team = [
    {
      name: "Sophia Weber",
      role: "Founder & CEO",
      bio: "Former marketing executive with 15+ years of experience in influencer marketing and brand partnerships.",
      initials: "SW"
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      bio: "Award-winning creative with background in digital content strategy and social media campaigns.",
      initials: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Influencer Relations",
      bio: "Expert in talent management and influencer partnerships with extensive network in the creator economy.",
      initials: "ER"
    },
    {
      name: "David Kim",
      role: "Analytics Director",
      bio: "Data specialist focused on campaign metrics, audience insights, and performance optimization.",
      initials: "DK"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-blue to-agency-purple mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            Our experts bring years of industry experience to help brands and creators forge meaningful partnerships.
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
