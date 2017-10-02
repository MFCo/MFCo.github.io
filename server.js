const express = require('express');
const next = require('next');
var compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression({ filter: shouldCompress }));

    function shouldCompress(req, res) {
      if (dev) {
        return false;
      }
      return compression.filter(req, res);
    }
    const options = {
      root: __dirname,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    };

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen((process.env.PORT = 3000), err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:' + process.env.PORT);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });