import React from 'react';
import Header from '../components/layout/Header'; // Importa o Header
import Footer from '../components/layout/Footer'; // Importa o Footer
import { motion } from 'framer-motion';
// Removido: import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; - Não estava sendo usado

const AboutPage: React.FC = () => {
  // Removido: const mapContainerStyle, center - Não estavam sendo usados

  return (
    <div className="min-h-screen flex flex-col bg-gray-light"> {/* Adiciona flex flex-col */}
      <Header /> {/* Adiciona o Header */}
      <main className="flex-grow"> {/* Adiciona main e flex-grow */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-dark mb-4">Sobre Nós</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça a história e a qualidade do Espaço Automotivo Retrovisores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-dark mb-4">Nossa História</h2>
                <p className="text-gray-600 mb-4">
                  O Espaço Automotivo Retrovisores nasceu da paixão por oferecer soluções de qualidade para retrovisores veiculares. Há anos no mercado, nos especializamos em fornecer produtos e serviços que atendem às necessidades dos nossos clientes com excelência.
                </p>
                <p className="text-gray-600 mb-4">
                  Começamos como uma pequena loja e, com dedicação e compromisso com a qualidade, nos tornamos referência no segmento de retrovisores na região de Belo Horizonte.
                </p>
                <p className="text-gray-600">
                  Nossa equipe é formada por profissionais experientes e capacitados, sempre prontos para oferecer o melhor atendimento e as melhores soluções para nossos clientes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-200 h-80 rounded-lg flex items-center justify-center"
              >
                {/* Placeholder para imagem da loja */}
                <div className="text-center p-4">
                <img src="/images/loja.jpg" alt="Fachada da Loja Espaço Automotivo" className="max-h-full max-w-full object-contain rounded-lg"/>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">Nossa Missão e Valores</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-dark mb-3">Missão</h3>
                <p className="text-gray-600">
                  Oferecer produtos e serviços de alta qualidade para retrovisores veiculares, garantindo a satisfação e segurança dos nossos clientes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-dark mb-3">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a melhor empresa de retrovisores veiculares de Belo Horizonte, expandindo nossa atuação e mantendo o compromisso com a qualidade.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-dark mb-3">Valores</h3>
                <p className="text-gray-600">
                  Comprometimento, honestidade, qualidade, respeito ao cliente e busca constante por inovação e melhoria nos nossos produtos e serviços.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">Nossa Localização</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Estamos localizados na Av. Cristiano Machado, Cidade Nova - Belo Horizonte/MG
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-[400px] bg-gray-300">
                {/* Placeholder para mapa */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* <img src="/images/mapa.png" alt="Mapa de localização" className="w-full h-full object-cover"/> */}
                  <p className="text-gray-600">Mapa de localização</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-3">Como Chegar</h3>
                <p className="text-gray-600 mb-4">
                  Estamos localizados em um ponto de fácil acesso na Av. Cristiano Machado, no bairro Cidade Nova.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-dark mb-2">Horário de Funcionamento:</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-dark mb-2">Contato:</h4>
                    <p className="text-gray-600">Telefone: (31) 3486-8347</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Adiciona o Footer */}
    </div>
  );
};

export default AboutPage;

