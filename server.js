const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(300).send({ msg: 'Hello World' }))
app.get('/foo', (req, res) => res.status(300).send({ msg: 'Hello Foo' }))

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
