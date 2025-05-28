import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": "Espaço Automotivo Retrovisores",
    "image": "https://espacoautomotivo.vercel.app/images/logo.png",
    "url": "https://espacoautomotivo.vercel.app",
    "telephone": "(31) 3486-8347",
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
      "latitude": -19.9167,
      "longitude": -43.9345
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
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/espacoautomotivo",
      "https://www.instagram.com/espacoautomotivo"
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
