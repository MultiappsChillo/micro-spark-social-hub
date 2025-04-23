
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HowItWorksSection() {
  const brandsSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We meet to understand your brand, goals, target audience, and campaign objectives."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Our team develops a customized campaign strategy with influencer profiles and content directions."
    },
    {
      number: "03",
      title: "Influencer Selection",
      description: "We present a curated list of micro-influencers aligned with your brand values and objectives."
    },
    {
      number: "04",
      title: "Campaign Execution",
      description: "We manage the entire campaign, including influencer briefs, content reviews, and scheduling."
    },
    {
      number: "05",
      title: "Performance Analysis",
      description: "Receive comprehensive reports on campaign performance, audience engagement, and ROI metrics."
    }
  ];

  const creatorsSteps = [
    {
      number: "01",
      title: "Join Our Network",
      description: "Apply to join our network by sharing your social profiles and content information."
    },
    {
      number: "02",
      title: "Profile Verification",
      description: "Our team reviews your application and verifies your audience metrics and engagement rates."
    },
    {
      number: "03",
      title: "Brand Matching",
      description: "We match you with brands that align with your content style, values, and audience demographics."
    },
    {
      number: "04",
      title: "Campaign Briefing",
      description: "Receive detailed campaign briefs with creative direction while maintaining your authentic voice."
    },
    {
      number: "05",
      title: "Create & Earn",
      description: "Create engaging content for your audience, receive feedback, and earn competitive compensation."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-blue to-agency-purple mx-auto my-6"></div>
          <p className="text-xl text-gray-600">
            Our streamlined process ensures successful campaigns for brands and rewarding opportunities for creators.
          </p>
        </div>

        <Tabs defaultValue="brands" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="brands" className="text-lg py-3">For Brands</TabsTrigger>
            <TabsTrigger value="creators" className="text-lg py-3">For Creators</TabsTrigger>
          </TabsList>
          
          <TabsContent value="brands">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
              {brandsSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="text-4xl font-bold text-gray-200 mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < brandsSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="creators">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
              {creatorsSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="text-4xl font-bold text-gray-200 mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < creatorsSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
