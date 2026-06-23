import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { TELEFONE_DISPLAY, TELEFONE_LINK, whatsappLink } from '../../config/contato';

const HeroSection: React.FC = () => {
  // Dados dos slides com imagens
  const slides = [
    {
      id: 1,
      title: 'Quebrou o retrovisor? A gente resolve hoje',
      description: 'Troca e instalação no mesmo dia em Belo Horizonte. Peças originais e alternativas para todas as marcas e modelos.',
      buttonText: 'Ver Serviços',
      buttonLink: '/servicos',
      image: '/images/slide1.jpg',
      alt: 'Conserto e troca de retrovisores em Belo Horizonte'
    },
    {
      id: 2,
      title: 'Especialistas em Retrovisores há 15 anos',
      description: 'Atendimento rápido e pessoal na Av. Cristiano Machado, Cidade Nova. Estacionamento grátis e 157 avaliações no Google.',
      buttonText: 'Sobre Nós',
      buttonLink: '/sobre',
      image: '/images/slide2.jpg',
      alt: 'Loja especializada em retrovisores na Cidade Nova, Belo Horizonte'
    },
    {
      id: 3,
      title: 'Retrovisor para todos os modelos',
      description: 'Espelhos, capas com pintura, retrovisor elétrico e com sensor. Originais e alternativos para o seu carro.',
      buttonText: 'Ver Produtos',
      buttonLink: '/produtos',
      image: '/images/slide3.jpg',
      alt: 'Retrovisores, espelhos e capas para todos os modelos em Belo Horizonte'
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
    <section className="relative" aria-label="Destaques do Espaço Retrovisores em Belo Horizonte">
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
              {/* Overlay escuro para melhorar a legibilidade do texto */}
              <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 max-w-3xl">
                  <motion.h1
                    id={`slide-title-${slide.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-white mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                  >
                    <a
                      href={TELEFONE_LINK}
                      className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
                      aria-label="Ligar agora para o Espaço Retrovisores"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      Ligar Agora
                    </a>
                    <a
                      href={slide.buttonLink}
                      className="w-full sm:w-auto bg-white/90 hover:bg-white text-gray-dark font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center"
                      aria-label={`${slide.buttonText} em Belo Horizonte`}
                    >
                      {slide.buttonText}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Barra de ação fixa — sempre visível, alta conversão */}
      <div className="bg-primary-dark text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-center md:text-left font-semibold text-lg">
            Atendimento rápido em Belo Horizonte — fale agora com um especialista:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={TELEFONE_LINK}
              className="flex-1 md:flex-none bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap"
              aria-label="Ligar agora"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {TELEFONE_DISPLAY}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap"
              aria-label="Falar no WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
