// Fonte única de verdade dos dados de contato (NAP).
// Manter IDÊNTICO ao Google Business Profile — consistência é requisito de aprovação do GBP.

export const NOME_EMPRESA = 'Espaço Retrovisores';

export const TELEFONE_DISPLAY = '(31) 3486-8347';
export const TELEFONE_LINK = 'tel:+553134868347';

const WHATSAPP_NUMERO = '553134868347';
export const whatsappLink = (
  mensagem = 'Olá! Gostaria de um orçamento para meu retrovisor.'
): string => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

export const ENDERECO_DISPLAY = 'Av. Cristiano Machado, 2650, Cidade Nova - Belo Horizonte/MG';
export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Espa%C3%A7o+Retrovisores+Av+Cristiano+Machado+2650+Cidade+Nova+Belo+Horizonte';

// Horário — alinhar com o GBP. Sábado a confirmar com Marcos (ver pendência).
export const HORARIO_SEMANA = 'Segunda a Sexta: 8h30 às 18h';
export const HORARIO_SABADO = 'Sábado: 8h30 às 14h';

// Redes sociais — confirmadas por Marcos em 22/06/2026.
export const FACEBOOK_URL = 'https://www.facebook.com/espacoautomotivobh/';
export const INSTAGRAM_URL = 'https://www.instagram.com/espacoautomotivobhmg/';
