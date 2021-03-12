const express = require('express')
const app = express()
const port = 3000

app.get('/ThanhNgu', (req, res) => {
  res.send('Thanh~~~ the greate friend ever! ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})