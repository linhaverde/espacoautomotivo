import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TELEFONE_DISPLAY,
  TELEFONE_LINK,
  whatsappLink,
  ENDERECO_DISPLAY,
  MAPS_LINK,
  HORARIO_SEMANA,
  HORARIO_SABADO,
} from '../../config/contato';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ nome: '', telefone: '', mensagem: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${form.nome || '(não informado)'}.` +
      ` Telefone: ${form.telefone || '(não informado)'}.` +
      ` ${form.mensagem || 'Gostaria de um orçamento para meu retrovisor.'}`;
    window.open(whatsappLink(texto), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-dark mb-4">Entre em Contato com o Espaço Retrovisores em Belo Horizonte</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para atender suas necessidades em retrovisores veiculares na região de Belo Horizonte. Fale agora com um especialista!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-bold text-gray-dark mb-4">Informações de Contato em Belo Horizonte</h3>
            <div className="space-y-4">
              <a href={TELEFONE_LINK} className="flex items-start group">
                <svg className="w-6 h-6 text-primary mt-1 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-dark">Telefone</h4>
                  <p className="text-primary font-semibold group-hover:underline">{TELEFONE_DISPLAY}</p>
                </div>
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start group">
                <svg className="w-6 h-6 text-primary mt-1 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-dark">Endereço em Belo Horizonte</h4>
                  <p className="text-gray-600 group-hover:underline">{ENDERECO_DISPLAY}</p>
                </div>
              </a>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mt-1 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-dark">Horário de Funcionamento</h4>
                  <p className="text-gray-600">{HORARIO_SEMANA}</p>
                  <p className="text-gray-600">{HORARIO_SABADO}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-gray-dark">Áreas Atendidas</h4>
                <p className="text-gray-600">Belo Horizonte, Santa Luzia, Sabará, Contagem, Betim e região metropolitana</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-bold text-gray-dark mb-4">Peça seu Orçamento pelo WhatsApp</h3>
            <p className="text-gray-600 mb-4">Preencha e nós abrimos o WhatsApp com sua mensagem pronta — é rápido.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome</label>
                <input
                  type="text"
                  id="nome"
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="telefone" className="block text-gray-700 font-bold mb-2">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu telefone com DDD"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-gray-700 font-bold mb-2">Qual o carro e o que precisa?</label>
                <textarea
                  id="mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ex: retrovisor direito do Onix 2020"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                Enviar pelo WhatsApp
              </button>
              <a
                href={TELEFONE_LINK}
                className="mt-3 w-full border-2 border-primary text-primary font-bold py-3 px-4 rounded-md transition duration-300 hover:bg-primary hover:text-white inline-flex items-center justify-center gap-2"
              >
                Ou ligue: {TELEFONE_DISPLAY}
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
