import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PatternStyles from '@/components/PatternStyles';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, Award, BookOpen, Users } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

const About = () => {
  useEffect(() => {
    document.title = 'About Coach Josh | Professional Basketball Training in NYC';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Coach Josh, a professional basketball coach in NYC with years of experience developing players of all ages and skill levels. Learn about our coaching philosophy and training approach.');
    }
  }, []);

  return (
    <>
      <PatternStyles />
      <Navbar />
      <div className="pt-20 pb-10 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Coach Josh</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Dedicated to basketball excellence and player development for over 15 years.
          </p>
        </div>
      </div>
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Coach Profile
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6">Elite Basketball Training and Development</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Coach Josh brings extensive experience and passion to basketball training in NYC. With a background in competitive basketball and professional coaching, he has developed a comprehensive training methodology that delivers results for players at all levels.
                </p>
                <p>
                  Having worked with hundreds of players from youth beginners to college athletes, Coach Josh understands how to tailor training approaches to meet individual needs while pushing athletes to reach their full potential.
                </p>
                <p>
                  His coaching philosophy focuses on developing complete players who excel technically, physically, and mentally. This holistic approach ensures that athletes not only improve their basketball skills but also develop character traits that serve them beyond the court.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg shadow-lg h-48">
                <img
                  src="/lovable-uploads/d984d400-922c-4be5-a1a8-4b2986ac0e69.png"
                  alt="Coach Josh in training session"
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg shadow-lg h-48">
                <img
                  src="/lovable-uploads/c063bdd7-88bb-4f28-a628-83674847625f.png"
                  alt="Coach Josh profile"
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg shadow-lg h-48">
                <img
                  src="/lovable-uploads/3aac0755-9a5b-459c-a513-96164f0db7ff.png"
                  alt="Coach Josh with team"
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg shadow-lg h-48">
                <img
                  src="/lovable-uploads/9c712df8-4c3b-4cd9-bfcb-6b5c7a3e0f73.png"
                  alt="Coach Josh with youth players"
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-24">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-gray-600">Years Coaching</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-gray-600">Players Trained</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold">4</div>
              <div className="text-gray-600">Training Programs</div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-6 text-center">Coaching Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-4">Technical Excellence</h3>
                <p>
                  Mastering basketball fundamentals is essential. We focus on proper technique in every aspect of the game, from shooting form to defensive stance, ensuring skills are built on a solid foundation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-4">Mental Toughness</h3>
                <p>
                  Basketball is as much mental as physical. We develop players' basketball IQ, decision-making abilities, focus under pressure, and the resilience to overcome challenges both on and off the court.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-4">Complete Development</h3>
                <p>
                  True greatness comes from balancing technical skills, physical conditioning, and mental preparation. Our holistic approach ensures players develop all aspects of their game simultaneously.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Session</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
