const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create an HTTP server to listen on port 80
  http.createServer((req, res) => {
    if (req.headers.host === 'koicontent.com') {
      // Redirect requests to port 3000
      const options = {
        hostname: 'localhost',
        port: 3000,
        path: req.url,
        method: req.method,
        headers: req.headers,
      };

      const proxy = http.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });

      req.pipe(proxy, { end: true });
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  }).listen(80, (err) => {
    if (err) throw err;
    console.log('> Ready on http://koicontent.com');
  });

  // Create the main server to handle Next.js requests on port 3000
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
