import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/build/blur.css'; // ✅ CORRIGIDO
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: 'Especialistas em Retrovisores Veiculares em Belo Horizonte',
      description: 'Venda de peças e serviços de manutenção com qualidade e compromisso na região de Belo Horizonte',
      buttonText: 'Conheça Nossos Serviços',
      buttonLink: '/servicos',
      image: '/images/slide1.jpg',
      alt: 'Retrovisores veiculares em Belo Horizonte'
    },
    {
      id: 2,
      title: 'Qualidade e Experiência na Cidade Nova',
      description: 'Atendimento personalizado para cada cliente em Belo Horizonte e região',
      buttonText: 'Sobre Nossa Empresa',
      buttonLink: '/sobre',
      image: '/images/slide2.jpg',
      alt: 'Atendimento especializado em retrovisores na Cidade Nova'
    },
    {
      id: 3,
      title: 'Produtos de Alta Qualidade para Retrovisores',
      description: 'Retrovisores e peças para todos os modelos de veículos em Belo Horizonte',
      buttonText: 'Ver Produtos',
      buttonLink: '/produtos',
      image: '/images/slide3.jpg',
      alt: 'Produtos de qualidade para retrovisores em Belo Horizonte'
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
    <section className="relative" aria-label="Destaques do Espaço Automotivo em Belo Horizonte">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div 
              className="relative h-[500px] bg-gray-900"
              aria-labelledby={`slide-title-${slide.id}`}
            >
              <LazyLoadImage
                src={slide.image}
                alt={slide.alt}
                effect="blur"
                className="absolute inset-0 w-full h-full object-cover"
                wrapperClassName="absolute inset-0"
                threshold={100}
              />
              <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <motion.h1 
                    id={`slide-title-${slide.id}`}
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
                    aria-label={`${slide.buttonText} em Belo Horizonte`}
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
