import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": "Espaço Retrovisores - Especialista em BH",
    "image": "https://espacoretrovisores.com.br/images/logo.png",
    "url": "https://espacoretrovisores.com.br",
    "telephone": "+55-31-3486-8347",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Cristiano Machado, 2650",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "31170-800",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.883209,
      "longitude": -43.929705
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/espacoautomotivobh/",
      "https://www.instagram.com/espacoautomotivobhmg/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
