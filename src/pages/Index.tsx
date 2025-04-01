
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Programs from '@/components/Programs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PatternStyles from '@/components/PatternStyles';

const Index = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'NYC Elite Basketball Training | Professional Basketball Coach in NYC';
  }, []);

  return (
    <>
      <PatternStyles />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Testimonials />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
