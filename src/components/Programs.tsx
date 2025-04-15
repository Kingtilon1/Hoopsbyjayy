import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

const programs = [
  {
    title: "Youth Development",
    description: "Building fundamental skills and love for the game in young players ages 5-12.",
    image: "/lovable-uploads/9c712df8-4c3b-4cd9-bfcb-6b5c7a3e0f73.png",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Teen Elite Training",
    description: "Advanced skill development for serious players ages 13-18 looking to compete at higher levels.",
    image: "/lovable-uploads/d984d400-922c-4be5-a1a8-4b2986ac0e69.png",
    color: "from-secondary to-orange-600"
  },
  {
    title: "Adult Skills & Conditioning",
    description: "Stay sharp and improve your game with specialized training for adult players of all levels.",
    image: "/lovable-uploads/c063bdd7-88bb-4f28-a628-83674847625f.png",
    color: "from-primary to-purple-700"
  },
  {
    title: "Team Training",
    description: "Comprehensive training programs for entire teams looking to build chemistry and elevate performance.",
    image: "/lovable-uploads/3aac0755-9a5b-459c-a513-96164f0db7ff.png",
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

        <ImageCarousel />
        
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-48 relative">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-50`}></div>
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white relative z-10">
                {program.title}
              </h3>
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
    </section>
  );
};

export default Programs;
