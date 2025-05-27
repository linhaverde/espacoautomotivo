import React from 'react';
import { motion } from 'framer-motion';

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-light">
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-light text-2xl font-bold">Espaço Automotivo Retrovisores</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-light p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-4 section-title">
            Teste de Configuração do Tailwind
          </h2>
          <p className="text-gray-dark mb-4">
            Este é um componente de teste para verificar se o Tailwind CSS está funcionando corretamente.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
            Botão de Teste
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default TestComponent;
