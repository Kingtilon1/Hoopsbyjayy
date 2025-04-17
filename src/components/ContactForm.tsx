
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import emailjs from 'emailjs-com';


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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const templateParams = {
      from_name: formData.name,     // maps to {{from_name}}
      to_name: 'Coach Josh',        // maps to {{to_name}} (you can hardcode this)
      message: formData.message     // maps to {{message}}
    };
  
    try {
      await emailjs.send(
        'service_egueh5i',     // replace with your actual service ID
        'template_fkyihuu',    // replace with your actual template ID
        templateParams,
        'R_D2lKy8QymP_Jrx6'      // replace with your actual public key
      );
  
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
  
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        program: 'Youth Development'
      });
    } catch (error) {
      toast({
        title: 'Sending failed',
        description: 'Something went wrong. Please try again later.',
      });
    }
  
    setLoading(false);
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
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(212) 555-1234"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="program">Interested Program</Label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="Youth Development">Youth Development</option>
                    <option value="Teen Elite Training">Teen Elite Training</option>
                    <option value="Adult Skills & Conditioning">Adult Skills & Conditioning</option>
                    <option value="Team Training">Team Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your basketball goals or any questions you have..."
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
