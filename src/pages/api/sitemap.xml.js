eexport default function handler(req, res) {
  // Definir o Content-Type como application/xml
  res.setHeader('Content-Type', 'application/xml');
  
  // Criar o conteúdo do sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://espacoautomotivo.vercel.app/</loc>
    <lastmod>2025-05-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://espacoautomotivo.vercel.app/servicos</loc>
    <lastmod>2025-05-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://espacoautomotivo.vercel.app/produtos</loc>
    <lastmod>2025-05-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://espacoautomotivo.vercel.app/sobre</loc>
    <lastmod>2025-05-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://espacoautomotivo.vercel.app/contato</loc>
    <lastmod>2025-05-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  // Enviar a resposta
  res.status(200 ).send(sitemap);
}

