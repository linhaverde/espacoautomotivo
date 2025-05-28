// Arquivo: pages/_app.js
// Este é o arquivo de layout principal do Next.js onde o botão do WhatsApp será adicionado

import '../styles/globals.css'; // Mantenha seus imports existentes
import WhatsAppButton from '../components/WhatsAppButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* Botão do WhatsApp com número de telefone e mensagem personalizada */}
      <WhatsAppButton 
        phoneNumber="5531348683471" 
        message="Olá! Gostaria de saber mais sobre os serviços de retrovisores do Espaço Automotivo."
      />
    </>
  );
}

export default MyApp;
