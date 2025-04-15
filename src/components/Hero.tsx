import React from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/90 to-primary text-white overflow-hidden">
      {/* Basketball Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pattern-basketball"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              <Star className="h-4 w-4 text-secondary mr-2" />
              <span className="text-sm font-medium">#1 Basketball Coach in NYC</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in">
              Elevate Your Game with NYC's Elite Basketball Training
            </h1>
            
            <p className="text-lg md:text-xl text-white/90">
              Personalized coaching that transforms players of all ages and skill levels. 
              Join the ranks of NYC's elite basketball talent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-bold">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
            
            <div className="flex items-center pt-6">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/lovable-uploads/61c643ac-ef35-4570-8c72-40d9269c3dca.png" alt="Client 1" />
                  <AvatarFallback>C1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/lovable-uploads/3f18c2e1-022e-4c58-a3bf-ba06142850c5.png" alt="Client 2" />
                  <AvatarFallback>C2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/lovable-uploads/f90bc4df-24d8-46bc-bced-efe5982e518b.png" alt="Client 3" />
                  <AvatarFallback>C3</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/lovable-uploads/7cb157ec-8453-4bd4-8187-a66ee801563b.png" alt="Client 4" />
                  <AvatarFallback>50+</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-4">
                <div className="font-bold">Trusted by 50+ Clients</div>
                <div className="text-sm text-white/80">in NYC and Beyond</div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img 
                    src="/lovable-uploads/9c712df8-4c3b-4cd9-bfcb-6b5c7a3e0f73.png"
                    alt="Coach Josh training youth players"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm mb-2">Scroll for more</span>
          <ArrowDown className="h-6 w-6 bounce-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
