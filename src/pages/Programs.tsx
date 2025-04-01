
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PatternStyles from '@/components/PatternStyles';
import { CheckCircle } from 'lucide-react';

const programsList = [
  {
    title: "Youth Development Program",
    description: "Building a strong foundation in basketball fundamentals for young players ages 5-12.",
    features: [
      "Age-appropriate skill development drills",
      "Focus on proper mechanics and technique",
      "Fun, engaging environment to foster love of the game",
      "Small group settings for maximum attention",
      "Character and teamwork development",
      "Regular progress assessments"
    ],
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Teen Elite Training Program",
    description: "Advanced training for serious players ages 13-18 looking to compete at higher levels.",
    features: [
      "Advanced skill development and refinement",
      "Position-specific training modules",
      "Game situation drills and decision making",
      "Strength and conditioning components",
      "Mental preparation and basketball IQ development",
      "Video analysis and feedback"
    ],
    color: "from-secondary to-orange-600"
  },
  {
    title: "Adult Skills & Conditioning",
    description: "Keep your game sharp with specialized training for adult players of all levels.",
    features: [
      "Skill tune-ups and technical refinements",
      "Conditioning designed for adult athletes",
      "Game strategy and tactical understanding",
      "Injury prevention training",
      "Evening and weekend scheduling options",
      "Personalized skill improvement plans"
    ],
    color: "from-primary to-purple-700"
  },
  {
    title: "Team Training Program",
    description: "Complete training solutions for entire teams looking to build chemistry and elevate performance.",
    features: [
      "Team offense and defense concepts",
      "Chemistry-building exercises",
      "Situation-specific training",
      "Custom practice plans for coaches",
      "Game preparation strategies",
      "Team and individual player assessment"
    ],
    color: "from-green-500 to-green-700"
  }
];

const Programs = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'Basketball Training Programs NYC | Youth, Teen & Adult Coaching';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Elite basketball training programs in NYC for all ages and skill levels. Youth development, teen elite training, adult skills, and team programs available.');
    }
  }, []);

  return (
    <>
      <PatternStyles />
      <Navbar />
      <div className="pt-20 pb-10 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Elite basketball training programs designed to meet your specific goals and take your game to the next level.
          </p>
        </div>
      </div>
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programsList.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${program.color} p-6 md:p-10 text-white`}>
                  <div className="absolute inset-0 opacity-20 pattern-basketball"></div>
                  <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
                  <p className="text-white/90 text-lg">{program.description}</p>
                </div>
                <div className="p-6 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-4">Program Features</h3>
                      <ul className="space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4">Program Details</h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="font-medium">Session Types:</div>
                          <div className="text-gray-600">Private, Small Group, Team Sessions</div>
                        </div>
                        <div>
                          <div className="font-medium">Session Length:</div>
                          <div className="text-gray-600">60-90 minutes</div>
                        </div>
                        <div>
                          <div className="font-medium">Location:</div>
                          <div className="text-gray-600">Various NYC facilities</div>
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/contact">Request Program Information</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Program Is Right For You?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss your goals and receive personalized program recommendations from our experienced coaching staff.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Programs;
