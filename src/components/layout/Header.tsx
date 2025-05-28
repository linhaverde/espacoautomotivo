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
          <img src="/images/logo.png" alt="Espaço Automotivo" className="h-10" />
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-light text-2xl font-bold">Espaço Automotivo</span>
              <span className="text-light text-xl ml-2">Retrovisores</span>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
              Início
            </Link>
            <Link to="/servicos" className="text-white hover:text-gray-200 transition duration-300">
              Serviços
            </Link>
            <Link to="/produtos" className="text-white hover:text-gray-200 transition duration-300">
              Produtos
            </Link>
            <Link to="/sobre" className="text-white hover:text-gray-200 transition duration-300">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-white hover:text-gray-200 transition duration-300">
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
                Serviços
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
    </header>
  );
};

export default Header;
