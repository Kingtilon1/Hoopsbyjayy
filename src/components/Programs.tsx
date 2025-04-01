
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Youth Development",
    description: "Building fundamental skills and love for the game in young players ages 5-12.",
    image: "youth",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Teen Elite Training",
    description: "Advanced skill development for serious players ages 13-18 looking to compete at higher levels.",
    image: "teen",
    color: "from-secondary to-orange-600"
  },
  {
    title: "Adult Skills & Conditioning",
    description: "Stay sharp and improve your game with specialized training for adult players of all levels.",
    image: "adult",
    color: "from-primary to-purple-700"
  },
  {
    title: "Team Training",
    description: "Comprehensive training programs for entire teams looking to build chemistry and elevate performance.",
    image: "team",
    color: "from-green-500 to-green-700"
  }
];

const Programs = () => {
  return (
    <section className="py-24" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Elite basketball training programs designed to meet your specific goals and take your game to the next level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div 
                className={`h-48 bg-gradient-to-r ${program.color} relative p-6 flex items-end`}
              >
                <div className="absolute inset-0 opacity-20 pattern-basketball"></div>
                <h3 className="text-2xl font-bold text-white relative z-10">{program.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Button asChild variant="outline">
                  <Link to="/programs" className="inline-flex items-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/contact" className="inline-flex items-center">
              Book a Free Consultation <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
