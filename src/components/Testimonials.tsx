
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Parent of Youth Player",
    content: "Coach Tilon transformed my son's confidence both on and off the court. His technical skills improved dramatically, but the mental growth has been even more impressive. Worth every penny!",
    rating: 5
  },
  {
    name: "Jasmine Williams",
    role: "High School Athlete",
    content: "I was struggling with my shooting form for years. After just 5 sessions, Coach Tilon completely rebuilt my technique. I'm now shooting 40% from three and have received interest from three college programs!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Amateur League Player",
    content: "As an adult player who never had formal training, I was amazed by how quickly Coach Tilon identified and fixed issues with my game. His approach is technical yet easy to understand.",
    rating: 5
  },
  {
    name: "Coach Kevin Thomas",
    role: "High School Basketball Coach",
    content: "I brought my entire team for a training camp with NYC Elite Hoops, and the improvement was immediate. Coach Tilon's drills and teaching methods are now part of our regular practice routine.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from players and parents who have experienced the NYC Elite Hoops difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-5 w-5 mr-1",
                      i < testimonial.rating ? "text-secondary fill-secondary" : "text-gray-400"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-lg mb-6">"{testimonial.content}"</p>
              
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-white/70 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
