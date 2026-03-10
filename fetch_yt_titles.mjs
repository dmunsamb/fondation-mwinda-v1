import https from 'https';

const ids = [
  'svx0DRN8ieU',
  '3AWvpJFlmDc',
  '34-AdhEnusg',
  'Q4KuYlA9fo0',
  '-V_jF3x5lVE',
  'D4AXUde9SGI',
  'G_ThZ0Ptz7M',
  '0Og_866ZdLQ',
  'Mv_nJNQAF3U',
  'A8b1ARBac4Q'
];

ids.forEach(id => {
  https.get(`https://www.youtube.com/watch?v=${id}`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<title>(.*?)<\/title>/);
      if (match) {
        console.log(`${id}: ${match[1]}`);
      }
    });
  });
});
