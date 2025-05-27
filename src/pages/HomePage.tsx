import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ProductsCarousel from '../components/home/ProductsCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsCarousel />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
