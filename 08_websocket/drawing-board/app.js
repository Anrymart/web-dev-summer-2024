const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.use(express.static('public'));

const clients = [];
const history = [];

app.ws('/board', (ws, req) => {
  clients.push(ws);
  ws.on('message', (msg) => {
    history.push(msg);
    console.log(msg);
    for (const ws of clients) {
      ws.send(msg);
    }
  });
});

app.get('/history', (req, res) => {
  res.json(history);
});

app.listen(3000);

module.exports = app;
