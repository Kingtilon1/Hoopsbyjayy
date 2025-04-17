
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

const programs = [
  {
    title: "Youth Development",
    description: "Building fundamental skills and love for the game in young players ages 5-12.",
    image: "/lovable-uploads/61c643ac-ef35-4570-8c72-40d9269c3dca.png", // Using the Youth Development image from the carousel
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Teen Elite Training",
    description: "Advanced skill development for serious players ages 13-18 looking to compete at higher levels.",
    image: "/lovable-uploads/782233ca-031b-4b21-a241-b50f1a4afb1b.png", // Use the image that was in Youth Development
    color: "from-secondary to-orange-600"
  },
  {
    title: "Adult Skills & Conditioning",
    description: "Stay sharp and improve your game with specialized training for adult players of all levels.",
    image: "/lovable-uploads/1571ce64-2189-439a-b1a8-da1ea3c28d35.png", // Use the new uploaded image
    color: "from-primary to-purple-700"
  },
  {
    title: "Team Training",
    description: "Comprehensive training programs for entire teams looking to build chemistry and elevate performance.",
    image: "/lovable-uploads/29315e7e-2faa-475b-99f7-f82e945f26fc.png", // Keep existing Team Training image
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
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="relative h-64">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-60`}></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white relative z-10">
                  {program.title}
                </h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Button asChild variant="outline" className="mt-auto w-fit">
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
