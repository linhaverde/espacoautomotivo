import React from 'react';

const GoogleMapLocation: React.FC = () => {
  return (
    <div className="google-map-container my-8">
      <h3 className="text-2xl font-bold text-gray-dark mb-4">Nossa Localização em Belo Horizonte</h3>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9!2d-43.9345!3d-19.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzAwLjEiUyA0M8KwNTYnMDQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1621436289012!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Localização do Espaço Automotivo em Belo Horizonte"
          aria-label="Mapa mostrando a localização do Espaço Automotivo na Av. Cristiano Machado, Cidade Nova, Belo Horizonte"
        ></iframe>
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href="https://maps.google.com/?q=Av.+Cristiano+Machado,+2650,+Cidade+Nova,+Belo+Horizonte+-+MG"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
          aria-label="Obter direções para o Espaço Automotivo no Google Maps"
        >
          Como Chegar
        </a>
      </div>
    </div>
  );
};

export default GoogleMapLocation;
