import https from 'https';

https.get('https://html.duckduckgo.com/html/?q=site:youtube.com/watch+%22fondation+mwinda%22', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<a class="result__url" href="[^"]*">.*?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+).*?<\/a>.*?<a class="result__snippet[^>]*>(.*?)<\/a>/gs;
    let match;
    while ((match = regex.exec(data)) !== null) {
      console.log(`${match[1]}: ${match[2].replace(/<[^>]+>/g, '')}`);
    }
  });
}).on('error', err => console.error(err));
