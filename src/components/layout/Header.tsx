import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <img src="/images/logo.png" alt="Espaço Automotivo Retrovisores Belo Horizonte" className="h-10" />
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-light text-2xl font-bold"></span>
              <span className="text-light text-2xl font-bold">Retrovisores BH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white text-xl font-semibold hover:text-gray-200 transition duration-300">
              Início
            </Link>
            <Link to="/servicos" className="text-white text-xl font-semibold hover:text-gray-200 transition duration-300">
              Serviços
            </Link>
            <Link to="/produtos" className="text-white text-xl font-semibold hover:text-gray-200 transition duration-300">
              Produtos
            </Link>
            <Link to="/sobre" className="text-white text-xl font-semibold hover:text-gray-200 transition duration-300">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-white text-xl font-semibold hover:text-gray-200 transition duration-300">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-gray-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/servicos" 
                className="text-white hover:text-gray-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços em BH
              </Link>
              <Link 
                to="/produtos" 
                className="text-white hover:text-gray-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link 
                to="/sobre" 
                className="text-white hover:text-gray-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-white hover:text-gray-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Informações de contato e localização */}
      <div className="bg-secondary py-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs text-white">
            <div className="flex items-center mr-4 mb-1 md:mb-0">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(31) 3486-8347</span>
            </div>
            <div className="flex items-center mb-1 md:mb-0">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Av. Cristiano Machado, 2650, Cidade Nova - Belo Horizonte/MG</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
