import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ProductsCarousel from '../components/home/ProductsCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ContactSection from '../components/home/ContactSection';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Espaço Automotivo | Especialistas em Retrovisores Veiculares em Belo Horizonte"
        description="Especialistas em retrovisores veiculares em Belo Horizonte. Venda, manutenção e reparo de retrovisores para todos os modelos de veículos com qualidade e compromisso."
        keywords="retrovisores, retrovisores veiculares, conserto de retrovisores, Belo Horizonte, Cidade Nova, espelhos automotivos, manutenção de retrovisores"
        ogUrl="https://espacoautomotivo.vercel.app/"
        canonical="https://espacoautomotivo.vercel.app/"
      />
      <Header />
      <main className="flex-grow" id="main-content">
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
