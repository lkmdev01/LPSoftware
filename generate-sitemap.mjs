import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/sobre', changefreq: 'monthly', priority: 0.8 },
  // Adicione mais URLs conforme necessário
];

const sitemap = new SitemapStream({ hostname: 'https://www.lkmdev.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

writeStream.on('finish', () => {
  console.log('Sitemap criado com sucesso!');
});

writeStream.on('error', (err) => {
  console.error('Erro ao criar o sitemap:', err);
});
