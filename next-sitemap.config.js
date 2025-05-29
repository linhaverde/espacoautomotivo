/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://espacoautomotivo.vercel.app',
  generateRobotsTxt: true,   // também gera o robots.txt automático
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/temp/*', '/private/*'], // rotas que quer excluir do sitemap
}
