import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Retrovisores Completos',
      description: 'Retrovisores novos para diversos modelos de veículos, com acabamento de alta qualidade e garantia.',
      categories: ['Todos', 'Retrovisores'],
      imagePlaceholder: '/images/product1.png'
    },
    {
      id: 2,
      title: 'Lentes de Retrovisores',
      description: 'Lentes e subconjuntos de reposição originais para o seu veículo.',
      categories: ['Todos', 'Lentes'],
      imagePlaceholder: '/images/product2.png'
    },
    {
      id: 3,
      title: 'Capas de Retrovisores',
      description: 'Capas de reposição para proteção e estética, disponíveis em diferentes cores e acabamentos mediante pintura.',
      categories: ['Todos', 'Capas'],
      imagePlaceholder: '/images/product3.png'
    },
    {
      id: 4,
      title: 'Retrovisores Elétricos',
      description: 'Intalação de ajuste elétrico para maior conforto e praticidade no dia a dia.',
      categories: ['Todos', 'Retrovisores', 'Elétricos'],
      imagePlaceholder: '/images/product4.png'
    },
    {
      id: 5,
      title: 'Retrovisores Térmicos',
      description: 'Retrovisores e lentes com sistema de desembaçamento térmico para maior segurança em dias frios e chuvosos.',
      categories: ['Todos', 'Retrovisores', 'Térmicos'],
      imagePlaceholder: '/images/product5.png'
    },
    {
      id: 6,
      title: 'Retrovisores Rebatíveis',
      description: 'Intalação e reparo de sistema de rebatimento para proteção em estacionamentos apertados.',
      categories: ['Todos', 'Retrovisores', 'Rebatíveis'],
      imagePlaceholder: '/images/product6.png'
    },
    {
      id: 7,
      title: 'Lentes Convexas',
      description: 'Lentes especiais que ampliam o campo de visão, reduzindo pontos cegos.',
      categories: ['Todos', 'Lentes', 'Especiais'],
      imagePlaceholder: '/images/product7.png'
    },
    {
      id: 8,
      title: 'Setas no retrovisor',
      description: 'Setas integradas ao retrovisor, reposição original para o seu seu veículo.',
      categories: ['Todos', 'Lentes', 'Coloridas'],
      imagePlaceholder: '/images/product8.png'
    },
    {
      id: 9,
      title: 'Peças de Reposição',
      description: 'Peças de reposição e mão de obra para diversos modelos de retrovisores.',
      categories: ['Todos', 'Peças'],
      imagePlaceholder: '/images/product9.png'
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('Todos');
  const categories = ['Todos', 'Retrovisores', 'Lentes', 'Capas', 'Elétricos', 'Térmicos', 'Peças'];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.categories.includes(activeCategory));

  return (
    <div className="min-h-screen flex flex-col bg-gray-light">
      <SEO 
        title="Produtos para Retrovisores | Espaço Automotivo em Belo Horizonte"
        description="Ampla variedade de retrovisores e peças de reposição para todos os modelos de veículos em Belo Horizonte. Retrovisores completos, lentes, capas e sistemas elétricos."
        keywords="retrovisores veiculares, lentes de retrovisores, capas de retrovisores, retrovisores elétricos, Belo Horizonte, Cidade Nova"
        ogUrl="https://espacoautomotivo.vercel.app/produtos"
        canonical="https://espacoautomotivo.vercel.app/produtos"
      />
      <Header />
      <main className="flex-grow" id="main-content">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-dark mb-4">Produtos para Retrovisores em Belo Horizonte</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Oferecemos uma ampla variedade de retrovisores e peças de reposição para todos os modelos de veículos na região de Belo Horizonte.
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
                    <img src={product.imagePlaceholder} alt={`Imagem de ${product.title}`} className="max-h-full max-w-full object-contain"/>
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
              <h2 className="text-3xl font-bold text-gray-dark mb-4">Marcas Trabalhadas em Belo Horizonte</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trabalhamos com as principais marcas do mercado, garantindo qualidade e compatibilidade para veículos em Belo Horizonte e região.
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
                  <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura em Belo Horizonte?</h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
