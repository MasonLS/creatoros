import { Calendar, BarChart3, Lightbulb, DollarSign, Zap, Users, Target, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Multi-Platform Content Calendar",
      description: "Plan, schedule, and publish content across all your platforms from one unified calendar.",
      color: "text-creator-purple"
    },
    {
      icon: BarChart3,
      title: "Unified Analytics Dashboard",
      description: "Track performance across YouTube, Instagram, TikTok, and more in one comprehensive view.",
      color: "text-creator-pink"
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Content Ideas",
      description: "Get personalized content suggestions based on trending topics and your audience preferences.",
      color: "text-creator-orange"
    },
    {
      icon: DollarSign,
      title: "Revenue Tracking",
      description: "Monitor all your income streams - ad revenue, sponsorships, courses, and affiliate marketing.",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Automate repetitive tasks like posting, responding to comments, and audience engagement.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Deep dive into your audience demographics, behavior patterns, and engagement metrics.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Brand Partnership Hub",
      description: "Manage sponsorship deals, track deliverables, and maintain brand relationships.",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Cross-Platform Publishing",
      description: "Adapt and publish your content to multiple platforms with platform-specific optimizations.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="gradient-text">scale your creator business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop switching between dozens of tools. CreatorOS brings everything together 
            in one powerful, intuitive platform designed specifically for content creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="demo-card h-full hover:scale-105 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-creator-purple/5 via-creator-pink/5 to-creator-orange/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">3x</div>
              <div className="text-sm text-gray-600 mt-1">Faster Content Planning</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">85%</div>
              <div className="text-sm text-gray-600 mt-1">Time Saved on Analytics</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">2.5x</div>
              <div className="text-sm text-gray-600 mt-1">Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-gray-600 mt-1">Platforms Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}