
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Basketball Game?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Take the first step towards basketball excellence today. Book a free consultation to discuss your goals and create a personalized training plan.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact" className="flex items-center">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="hidden md:block relative h-full min-h-[300px]">
              <div className="absolute inset-0 bg-accent/20 z-0">
                <div className="absolute inset-0 opacity-30 pattern-basketball"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                <div className="text-4xl font-bold text-white mb-4">Transform Your Game</div>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-white/80 text-sm">Players Coached</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-white/80 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
