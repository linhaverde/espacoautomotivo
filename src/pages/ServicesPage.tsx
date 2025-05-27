import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Troca de Retrovisores',
      description: 'Substituição completa de retrovisores danificados por novos, com garantia de qualidade e perfeito acabamento.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Reparo de Retrovisores',
      description: 'Conserto de retrovisores com problemas mecânicos ou elétricos, restaurando sua funcionalidade original.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Substituição de Lentes',
      description: 'Troca apenas da lente do retrovisor, mantendo a carcaça original quando esta estiver em bom estado.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Pintura de Retrovisores',
      description: 'Serviço de pintura personalizada na cor do seu veículo, com acabamento profissional.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Instalação de Retrovisores Elétricos',
      description: 'Conversão de retrovisores manuais para elétricos, adicionando conforto e praticidade ao seu veículo.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Manutenção Preventiva',
      description: 'Verificação e ajustes periódicos para garantir o perfeito funcionamento dos retrovisores do seu veículo.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-light">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-dark mb-4">Nossos Serviços</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços especializados em retrovisores veiculares, com qualidade e compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-light rounded-lg p-6"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Como Funciona Nosso Atendimento</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">Diagnóstico</h3>
              <p className="text-gray-600">
                Realizamos uma avaliação detalhada do seu retrovisor para identificar o problema e propor a melhor solução.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">Orçamento</h3>
              <p className="text-gray-600">
                Apresentamos um orçamento transparente e detalhado, sem surpresas ou custos adicionais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">Execução</h3>
              <p className="text-gray-600">
                Realizamos o serviço com agilidade e qualidade, utilizando peças de primeira linha e técnicas avançadas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center text-white mb-8">
                <h2 className="text-3xl font-bold mb-4">Precisa de um orçamento?</h2>
                <p className="text-xl">
                  Entre em contato conosco e solicite um orçamento sem compromisso.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <a
                  href="/contato"
                  className="bg-white text-primary-dark hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Solicitar Orçamento
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

export default ServicesPage;
