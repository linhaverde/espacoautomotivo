import React from 'react';
import { motion } from 'framer-motion';

const ProductsCarousel: React.FC = () => {
  // Dados dos produtos/serviços para o carrossel
  const products = [
    {
      id: 1,
      title: 'Retrovisores Completos',
      description: 'Retrovisores novos para diversos modelos de veículos',
      image: '/images/product1.jpg'
    },
    {
      id: 2,
      title: 'Lentes de Retrovisores',
      description: 'Lentes de alta qualidade com opções de cores e acabamentos',
      image: '/images/product2.jpg'
    },
    {
      id: 3,
      title: 'Capas de Retrovisores',
      description: 'Capas de reposição para proteção e estética',
      image: '/images/product3.jpg'
    },
    {
      id: 4,
      title: 'Manutenção de Retrovisores',
      description: 'Serviço especializado de reparo e manutenção',
      image: '/images/service1.jpg'
    },
    {
      id: 5,
      title: 'Instalação Profissional',
      description: 'Instalação com garantia e acabamento perfeito',
      image: '/images/service2.jpg'
    },
    {
      id: 6,
      title: 'Pintura Personalizada',
      description: 'Serviço de pintura na cor do seu veículo',
      image: '/images/service3.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-dark mb-4">Nossos Produtos e Serviços</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla variedade de retrovisores e serviços especializados para atender às necessidades do seu veículo.
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
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-gray-600">Imagem do produto/serviço</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.id <= 3 ? "/produtos" : "/servicos"}
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  {product.id <= 3 ? "Ver Produto" : "Ver Serviço"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
