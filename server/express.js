const express = require('express');
var httpProxy = require('http-proxy');

const app = express();
app.use(express.static('dist'));
app.use(express.json());
const port = 3000;

var apiProxy = httpProxy.createProxyServer({ prependPath: false });

app.get("/api/pledges/:id", function(req, res) {
    let { id } = req.params;
    console.log('proxy hit with id: ', id);
    apiProxy.web(req, res, {target: `http://localhost:3003/api/pledges/${id}`});
});

apiProxy.on('error', function(e) {
  console.log('proxy error: ', e);
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));