import React from 'react';
import { motion } from 'framer-motion';

// Componente de spinner de carregamento
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-light">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-dark font-medium">Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
