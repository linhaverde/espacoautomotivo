import React from 'react';
import {
  TELEFONE_DISPLAY,
  TELEFONE_LINK,
  ENDERECO_DISPLAY,
  MAPS_LINK,
  HORARIO_SEMANA,
  HORARIO_SABADO,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from '../../config/contato';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato em Belo Horizonte</h3>
            <p className="mb-2">
              <span className="font-bold">Telefone:</span>{' '}
              <a href={TELEFONE_LINK} className="hover:text-primary hover:underline">{TELEFONE_DISPLAY}</a>
            </p>
            <p className="mb-2">
              <span className="font-bold">Endereço:</span>{' '}
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{ENDERECO_DISPLAY}</a>
            </p>
            <p className="mb-2">
              <span className="font-bold">Horário:</span> {HORARIO_SEMANA} | {HORARIO_SABADO}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary transition duration-300">Início</a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-primary transition duration-300">Serviços de Retrovisores</a>
              </li>
              <li>
                <a href="/produtos" className="hover:text-primary transition duration-300">Produtos para Retrovisores</a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-primary transition duration-300">Sobre Nossa Empresa</a>
              </li>
              <li>
                <a href="/contato" className="hover:text-primary transition duration-300">Contato em Belo Horizonte</a>
              </li>
            </ul>
          </div>

          {/* Sobre a Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Espaço Retrovisores em Belo Horizonte</h3>
            <p className="mb-4">
              Especialistas em retrovisores veiculares em Belo Horizonte, oferecendo serviços de manutenção e venda de peças com qualidade e compromisso para toda a região metropolitana.
            </p>
            <div className="mt-4 mb-4">
              <h4 className="font-bold mb-2">Áreas Atendidas:</h4>
              <p>Belo Horizonte, Contagem, Betim, Santa Luzia e região metropolitana</p>
            </div>
            <div className="flex space-x-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook do Espaço Retrovisores" className="text-white hover:text-primary transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Espaço Retrovisores" className="text-white hover:text-primary transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Espaço Retrovisores - Belo Horizonte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
