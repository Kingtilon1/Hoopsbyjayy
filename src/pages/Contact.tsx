
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PatternStyles from '@/components/PatternStyles';

const Contact = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'Contact NYC Elite Basketball Coach | Free Consultation';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact NYC\'s elite basketball coach for personalized training. Book a free consultation to discuss your basketball goals and training needs.');
    }
  }, []);

  return (
    <>
      <PatternStyles />
      <Navbar />
      <div className="pt-20 pb-10 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Have questions or ready to start your basketball journey? Get in touch with NYC's elite basketball coach today.
          </p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
