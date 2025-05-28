import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  // Dados dos slides com imagens
  const slides = [
    {
      id: 1,
      title: 'Especialistas em Retrovisores Veiculares',
      description: 'Venda de peças e serviços de manutenção com qualidade e compromisso',
      buttonText: 'Conheça Nossos Serviços',
      buttonLink: '/servicos',
      image: '/images/slide1.jpg' // Adicione sua imagem aqui
    },
    {
      id: 2,
      title: 'Qualidade e Experiência',
      description: 'Atendimento personalizado para cada cliente',
      buttonText: 'Sobre Nossa Empresa',
      buttonLink: '/sobre',
      image: '/images/slide2.jpg' // Adicione sua imagem aqui
    },
    {
      id: 3,
      title: 'Produtos de Alta Qualidade',
      description: 'Retrovisores e peças para todos os modelos de veículos',
      buttonText: 'Ver Produtos',
      buttonLink: '/produtos',
      image: '/images/slide3.jpg' // Adicione sua imagem aqui
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div 
              className="relative h-[500px] bg-gray-900"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay escuro para melhorar a legibilidade do texto */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-white mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    href={slide.buttonLink} 
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    {slide.buttonText}
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
