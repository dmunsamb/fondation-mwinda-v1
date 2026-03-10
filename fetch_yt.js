const https = require('https');

https.get('https://www.youtube.com/results?search_query=fondation+mwinda', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/watch\?v=([a-zA-Z0-9_-]{11})/g);
    if (matches) {
      const uniqueIds = [...new Set(matches.map(m => m.split('=')[1]))];
      console.log(uniqueIds.slice(0, 10));
    } else {
      console.log('No matches');
    }
  });
}).on('error', err => console.error(err));
