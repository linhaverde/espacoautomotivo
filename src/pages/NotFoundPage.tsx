import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Página não encontrada | Espaço Automotivo"
        description="A página que você está procurando não foi encontrada. Volte para a página inicial do Espaço Automotivo em Belo Horizonte."
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
