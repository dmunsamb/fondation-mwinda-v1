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
  https.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        console.log(`${id}: ${json.title} (by ${json.author_name})`);
      } catch (e) {
        console.log(`${id}: error parsing`);
      }
    });
  });
});
