const express = require('express'); // express, used for webserver actions
const path = require('path'); // Wait, what?

const app = express();
const HTTP_PORT = 7277; // WYSI

app.use(express.static(path.join(__dirname, 'www')))

app.listen(HTTP_PORT, () => {
  console.log(`Web server running on port ${HTTP_PORT}`);
});
