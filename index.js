const express = require('express')
const app = express()
const port = 3000
const https = require("https")

app.get('/', (req, res) => {
  const request = https.get(
    'https://fs.esf.fangdd.com/efab/Fg0EjXHr-MQ9SbBdCSZTE3F9AGmA.png',
    (response) => {
      response.pipe(res);
    }
  );
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
