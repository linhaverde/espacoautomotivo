import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: 1,
      title: 'Especialistas Exclusivos',
      description: 'Somos dedicados exclusivamente a retrovisores há 15 anos. Não fazemos de tudo um pouco — fazemos retrovisores com profundidade técnica que uma oficina generalista não oferece.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Atendimento no Seu Carro',
      description: 'Na maioria dos casos você não precisa sair do veículo. O serviço é feito ali mesmo, rápido e sem complicação. Você entra com o problema e sai com o retrovisor resolvido.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.038A2.968 2.968 0 0115 10.506V9.5a1 1 0 00-.293-.707l-2-2A1 1 0 0012 6.5H11V5a1 1 0 00-1-1H3zm8 6.5V8.914l1.586 1.586H11z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Empresa Familiar',
      description: 'Negócio familiar com atendimento pessoal. Aqui você fala com quem faz o serviço — sem intermediários, sem enrolação. Honestidade e transparência em cada orçamento.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Preço Justo',
      description: 'Orçamento transparente, sem surpresas. Trabalhamos com peças originais e paralelas de qualidade para caber no seu bolso — você escolhe a melhor opção para o seu caso.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-dark mb-4">Por Que Escolher o Espaço Retrovisores em Belo Horizonte</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos especialistas em retrovisores veiculares na região de Belo Horizonte, oferecendo o melhor em produtos e serviços para nossos clientes da Cidade Nova e toda a região metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-light rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
