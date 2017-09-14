const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(300).send({ msg: 'Hello World' }))

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
