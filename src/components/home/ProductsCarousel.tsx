import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const ProductsCarousel: React.FC = () => {
  // Dados dos produtos/serviços para o carrossel
  const products = [
    {
      id: 1,
      title: 'Retrovisores Completos',
      description: 'Retrovisores novos para diversos modelos de veículos em Belo Horizonte',
      image: '/images/banner (5).png',
      alt: 'Retrovisores completos para veículos em Belo Horizonte'
    },
    {
      id: 2,
      title: 'Lentes de Retrovisores',
      description: 'Lentes de alta qualidade com opções de cores e acabamentos para clientes de Belo Horizonte',
      image: '/images/banner (2).png',
      alt: 'Lentes de retrovisores de alta qualidade em Belo Horizonte'
    },
    {
      id: 3,
      title: 'Capas de Retrovisores',
      description: 'Capas de reposição para proteção e estética, disponíveis na Cidade Nova',
      image: '/images/banner (4).png',
      alt: 'Capas de retrovisores para proteção e estética em Belo Horizonte'
    },
    {
      id: 4,
      title: 'Manutenção de Retrovisores em BH',
      description: 'Serviço especializado de reparo e manutenção na região de Belo Horizonte',
      image: '/images/banner (1).png',
      alt: 'Serviço de manutenção de retrovisores em Belo Horizonte'
    },
    {
      id: 5,
      title: 'Instalação Profissional',
      description: 'Instalação com garantia e acabamento perfeito para clientes de Belo Horizonte e região',
      image: '/images/banner (6).png',
      alt: 'Instalação profissional de retrovisores em Belo Horizonte'
    },
    {
      id: 6,
      title: 'Pintura Personalizada',
      description: 'Serviço de pintura na cor do seu veículo, disponível na Cidade Nova, Belo Horizonte',
      image: '/images/banner (7).png',
      alt: 'Pintura personalizada de retrovisores em Belo Horizonte'
    }
  ];

  return (
    <section className="py-16 bg-gray-light" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="products-heading" className="text-3xl font-bold text-gray-dark mb-4">Produtos e Serviços para Retrovisores em Belo Horizonte</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla variedade de retrovisores e serviços especializados para atender às necessidades do seu veículo na região de Belo Horizonte e Cidade Nova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              role="article"
              aria-labelledby={`product-title-${product.id}`}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <LazyLoadImage
                  src={product.image}
                  alt={product.alt}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  wrapperClassName="w-full h-full"
                  threshold={300}
                />
              </div>
              <div className="p-6">
                <h3 id={`product-title-${product.id}`} className="text-xl font-bold text-gray-dark mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.id <= 3 ? "/produtos" : "/servicos"}
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
                  aria-label={`Ver mais sobre ${product.title} em Belo Horizonte`}
                >
                  {product.id <= 3 ? "Ver Produto" : "Ver Serviço"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-dark mb-4">Atendemos toda a região de Belo Horizonte</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Além da Cidade Nova, atendemos clientes de Contagem, Betim, Santa Luzia e toda a região metropolitana de Belo Horizonte.
          </p>
          <a
            href="/contato"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            aria-label="Entre em contato conosco em Belo Horizonte"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
