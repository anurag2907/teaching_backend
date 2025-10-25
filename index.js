require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/rand',(req,res) => {
    res.send("<h1> jhata rahul sharma digital marketing expert  </h1>");
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
