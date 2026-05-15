import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-light">
      <SEO 
        title="Sobre o Espaço Retrovisores | Especialistas em Retrovisores em BH"
        description="Conheça a história do Espaço Retrovisores, referência em retrovisores veiculares em Belo Horizonte. 15 anos de experiência e compromisso com a qualidade."
        keywords="Espaço Retrovisores, história, empresa de retrovisores, Belo Horizonte, Cidade Nova, missão, visão, valores"
        ogUrl="https://espacoretrovisores.vercel.app/sobre"
        canonical="https://espacoretrovisores.vercel.app/sobre"
      />
      <Header />
      <main className="flex-grow" id="main-content">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-dark mb-4">Sobre o Espaço Retrovisores - Especialistas em Retrovisores em Belo Horizonte</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça a história e a qualidade do Espaço Retrovisores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-dark mb-4">15 Anos na Cidade Nova, Belo Horizonte</h2>
                <p className="text-gray-600 mb-4">
                  O Espaço Retrovisores é um negócio familiar especializado <strong>exclusivamente</strong> em retrovisores e espelhos automotivos há mais de 15 anos. Não somos uma oficina geral que também faz retrovisor — somos especialistas que só fazem isso.
                </p>
                <p className="text-gray-600 mb-4">
                  Essa escolha tem um motivo: profundidade técnica. Ao longo de 15 anos consertando e trocando retrovisores de todas as marcas, desenvolvemos um conhecimento que um generalista simplesmente não tem. Peças que parecem sem conserto, sistemas elétricos complexos, modelos importados — já vimos de tudo.
                </p>
                <p className="text-gray-600">
                  Atendemos diretamente no veículo quando possível, sem burocracia, com orçamento transparente e sem surpresas na hora de pagar. Porque aqui você fala com a família que coloca o nome no serviço.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-200 h-80 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-4">
                <img src="/images/loja.jpg" alt="Fachada da Loja Espaço Retrovisores" className="max-h-full max-w-full object-contain rounded-lg"/>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">O Que Nos Diferencia</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="text-xl font-bold text-gray-dark mb-3">Só Retrovisores</h3>
                <p className="text-gray-600">
                  Enquanto outras oficinas fazem de tudo, nós nos dedicamos exclusivamente a retrovisores. Isso significa que quando você chega com um problema difícil, já vimos antes — e sabemos resolver.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-3">🚗</div>
                <h3 className="text-xl font-bold text-gray-dark mb-3">Sem Sair do Carro</h3>
                <p className="text-gray-600">
                  Na maioria dos atendimentos você nem precisa descer do veículo. O serviço é feito no local, com agilidade. Clientes relatam que o retrovisor foi trocado enquanto esperavam no carro.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-gray-dark mb-3">Família que Responde</h3>
                <p className="text-gray-600">
                  Negócio familiar onde você fala diretamente com quem executa o serviço. Orçamento honesto, sem empurrar peça desnecessária. Se tem conserto mais barato, a gente fala.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">Nossa Localização em Belo Horizonte</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Estamos estrategicamente localizados na Av. Cristiano Machado, Cidade Nova - Belo Horizonte/MG
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-[400px] bg-gray-300">
                <div className="w-full h-full flex items-center justify-center">
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
                    <p className="text-gray-600">Sábado: 8h às 14h</p>
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
      <Footer />
    </div>
  );
};

export default AboutPage;
