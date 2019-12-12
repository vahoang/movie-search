import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/components/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/page*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

// // "start": "react-scripts start",
// // "build": "react-scripts build",
// // "test": "react-scripts test",
// // "eject": "react-scripts eject"
// require('ignore-styles')

// require('@babel/register')({
//   ignore: [/(node_modules)/],
//   presets: ['@babel/preset-env', '@babel/preset-react']
// })

// require('./server')

// import path from 'path'
// import fs from 'fs'

// import express from 'express'
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'

// import App from '../src/components/App'

// const PORT = 8080
// const app = express()

// const router = express.Router()

// const serverRenderer = (req, res, next) => {
//   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred')
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
//       )
//     )
//   })
// }
// router.use('^/$', serverRenderer)

// router.use(
//   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
// )

// // tell the app to use the above rules
// app.use(router)

// // app.use(express.static('./build'))
// app.listen(PORT, () => {
//   console.log(`SSR running on port ${PORT}`)
// })