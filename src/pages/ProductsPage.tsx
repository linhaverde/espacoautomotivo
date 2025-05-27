import React from 'react';
import { motion } from 'framer-motion';

const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Retrovisores Completos',
      description: 'Retrovisores novos para diversos modelos de veículos, com acabamento de alta qualidade e garantia.',
      categories: ['Todos', 'Retrovisores']
    },
    {
      id: 2,
      title: 'Lentes de Retrovisores',
      description: 'Lentes de reposição com diversas opções de cores e acabamentos para personalizar seu veículo.',
      categories: ['Todos', 'Lentes']
    },
    {
      id: 3,
      title: 'Capas de Retrovisores',
      description: 'Capas de reposição para proteção e estética, disponíveis em diferentes cores e acabamentos.',
      categories: ['Todos', 'Capas']
    },
    {
      id: 4,
      title: 'Retrovisores Elétricos',
      description: 'Retrovisores com ajuste elétrico para maior conforto e praticidade no dia a dia.',
      categories: ['Todos', 'Retrovisores', 'Elétricos']
    },
    {
      id: 5,
      title: 'Retrovisores Térmicos',
      description: 'Retrovisores com sistema de desembaçamento térmico para maior segurança em dias frios e chuvosos.',
      categories: ['Todos', 'Retrovisores', 'Térmicos']
    },
    {
      id: 6,
      title: 'Retrovisores Rebatíveis',
      description: 'Retrovisores com sistema de rebatimento para proteção em estacionamentos apertados.',
      categories: ['Todos', 'Retrovisores', 'Rebatíveis']
    },
    {
      id: 7,
      title: 'Lentes Convexas',
      description: 'Lentes especiais que ampliam o campo de visão, reduzindo pontos cegos.',
      categories: ['Todos', 'Lentes', 'Especiais']
    },
    {
      id: 8,
      title: 'Lentes Coloridas',
      description: 'Lentes em diversas cores para personalização do seu veículo.',
      categories: ['Todos', 'Lentes', 'Coloridas']
    },
    {
      id: 9,
      title: 'Suportes de Retrovisores',
      description: 'Peças de fixação e suporte para diversos modelos de retrovisores.',
      categories: ['Todos', 'Peças']
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('Todos');
  const categories = ['Todos', 'Retrovisores', 'Lentes', 'Capas', 'Elétricos', 'Térmicos', 'Peças'];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.categories.includes(activeCategory));

  return (
    <div className="min-h-screen bg-gray-light">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-dark mb-4">Nossos Produtos</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla variedade de retrovisores e peças de reposição para todos os modelos de veículos.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-gray-600">Imagem do produto</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-dark mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.categories.filter(cat => cat !== 'Todos').map(category => (
                      <span key={category} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                        {category}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/contato"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Marcas Trabalhadas</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as principais marcas do mercado, garantindo qualidade e compatibilidade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
                <span className="text-gray-400 font-medium">Logo da Marca</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center text-white mb-8">
                <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
                <p className="text-xl">
                  Entre em contato conosco e encontraremos a solução ideal para o seu veículo.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <a
                  href="/contato"
                  className="bg-white text-primary-dark hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Fale Conosco
                </a>
                <a
                  href="tel:3134868347"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Ligar Agora: (31) 3486-8347
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
