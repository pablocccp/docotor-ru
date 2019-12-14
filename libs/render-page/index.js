import Path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const RenderPage = (res, View, htmlIndex, dataApp = {}) => {
  const indexFile = Path.join(`${__dirname}/../../public/${htmlIndex}.html`);
  if (!process.env.BROWSER) {
    global.window = null; // Temporarily define window for server-side
  }
  
  const app = View ? ReactDOMServer.renderToString(<View  {...dataApp}/>): '';

  fs.readFile(indexFile, 'utf8', (errRead, data) => {
    if (errRead) throw errRead;
    const fileContent = data;
    
    res.send(fileContent.replace('<div id="root"></div>', `
    <div id="root">${app}</div>
    <script type="text/javascript">
      window.__PRELOADED_STATE__ = ${JSON.stringify(dataApp).replace(/</g, "\\u003c")};
    </script>
    `));
  });
};

export default RenderPage;