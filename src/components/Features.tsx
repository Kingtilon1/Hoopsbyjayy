
import React from 'react';
import { 
  Trophy, 
  Users, 
  Target, 
  Clock,
  Brain,
  Dumbbell,
  Zap,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: <Trophy className="h-8 w-8 text-secondary" />,
    title: "Championship Experience",
    description: "Learn from a coach with proven success developing championship-caliber players and teams."
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "All Ages & Skill Levels",
    description: "From beginners to advanced players, personalized coaching for youth and adults alike."
  },
  {
    icon: <Target className="h-8 w-8 text-secondary" />,
    title: "Goal-Oriented Training",
    description: "Custom training plans designed to help you reach your specific basketball goals."
  },
  {
    icon: <Brain className="h-8 w-8 text-secondary" />,
    title: "Mental Game Mastery",
    description: "Develop the mental toughness and basketball IQ needed to excel at any level."
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-secondary" />,
    title: "Strength & Conditioning",
    description: "Integrated physical training to enhance your on-court performance and prevent injury."
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "Flexible Scheduling",
    description: "Training sessions available throughout NYC that fit your busy schedule."
  },
  {
    icon: <Zap className="h-8 w-8 text-secondary" />,
    title: "Rapid Skill Development",
    description: "See measurable improvement in your game in just weeks with our proven methods."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-secondary" />,
    title: "Elite Networking",
    description: "Connect with college scouts, teams, and other opportunities through our extensive network."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NYC Elite Hoops</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to basketball training delivers results that other programs simply can't match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
