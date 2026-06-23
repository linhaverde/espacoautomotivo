import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TELEFONE_DISPLAY,
  TELEFONE_LINK,
  whatsappLink,
  ENDERECO_DISPLAY,
  MAPS_LINK,
} from '../../config/contato';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-2">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/images/logo.png" alt="Espaço Retrovisores Belo Horizonte" className="h-10" />
            <span className="text-light text-xl md:text-2xl font-bold whitespace-nowrap">
              Espaço Retrovisores
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
              Início
            </Link>
            <Link to="/servicos" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
              Serviços
            </Link>
            <Link to="/produtos" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
              Produtos
            </Link>
            <Link to="/sobre" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
              Contato
            </Link>
          </nav>

          {/* CTAs sempre visíveis (ligar + whatsapp) */}
          <div className="flex items-center gap-2">
            <a
              href={TELEFONE_LINK}
              className="flex items-center gap-1 bg-white text-primary font-bold py-2 px-3 rounded-lg hover:bg-gray-100 transition duration-300 text-sm md:text-base"
              aria-label="Ligar agora para o Espaço Retrovisores"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">Ligar</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-green-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-green-600 transition duration-300 text-sm md:text-base"
              aria-label="Falar no WhatsApp com o Espaço Retrovisores"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none ml-1"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <Link to="/" className="text-white hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link to="/servicos" className="text-white hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
                Serviços em BH
              </Link>
              <Link to="/produtos" className="text-white hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
                Produtos
              </Link>
              <Link to="/sobre" className="text-white hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
                Sobre Nós
              </Link>
              <Link to="/contato" className="text-white hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Barra de contato — telefone e endereço clicáveis */}
      <div className="bg-secondary py-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs text-white">
            <a href={TELEFONE_LINK} className="flex items-center mr-4 mb-1 md:mb-0 hover:underline">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{TELEFONE_DISPLAY}</span>
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-1 md:mb-0 hover:underline"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{ENDERECO_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
