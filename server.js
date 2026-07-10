const express = require('express'); // express, used for webserver actions
const path = require('path'); // Wait, what?
const fs = require('fs'); // Filesystem actions

const app = express();
const HTTP_PORT = 7277; // WYSI

function readFile(filename) {
    const filepath = path.join(__dirname, filename);
    const data = fs.readFileSync(filepath);
    return data
}

app.get('/', async (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.send(readFile("index.html"));
});

app.get('/startendo.png', async (req, res) => {
  res.setHeader('content-type', 'image/png');
  res.send(readFile("startendo.png"));
});

app.listen(HTTP_PORT, () => {
  console.log(`Web server running on port ${HTTP_PORT}`);
});
