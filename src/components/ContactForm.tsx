import React, { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    program: 'Youth Development'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message received!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        program: 'Youth Development'
      });
    }, 1500);
  };

  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to take your game to the next level? Get in touch for a free consultation and personalized training plan.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email Us</div>
                  <a href="mailto:CoachJosh830@gmail.com" className="font-medium hover:text-primary">
                    CoachJosh830@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Based In</div>
                  <div className="font-medium">Manhattan & Brooklyn, NYC</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold mb-2">Training Locations</h3>
              <p className="text-gray-600">
                We provide training at various facilities across NYC, including school gyms, public courts, and private training centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
