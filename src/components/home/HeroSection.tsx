import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
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
        <div>
          <div className="relative h-[500px] bg-gray-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Especialistas em Retrovisores Veiculares
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-white mb-8"
                >
                  Venda de peças e serviços de manutenção com qualidade e compromisso
                </motion.p>
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  href="/servicos" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Conheça Nossos Serviços
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[500px] bg-gray-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Qualidade e Experiência</h1>
                <p className="text-xl text-white mb-8">Atendimento personalizado para cada cliente</p>
                <a 
                  href="/sobre" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Sobre Nossa Empresa
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[500px] bg-gray-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Produtos de Alta Qualidade</h1>
                <p className="text-xl text-white mb-8">Retrovisores e peças para todos os modelos de veículos</p>
                <a 
                  href="/produtos" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Ver Produtos
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
