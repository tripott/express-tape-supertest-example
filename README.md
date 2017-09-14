# Express Tape SuperTest Example

Simple example Testing Express Apps


## Getting Started

```
npm init -y
npm install express 
npm install tape supertest faucet --save-dev
```

server.js

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(300).send({ msg: 'Hello World' }))

if (!module.parent) {
  app.listen(3000)
}

module.exports = app


```


test/index_test.js

```js
const test = require('tape')
const request = require('supertest')

const app = require('../')

test('Get /', t => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.equals(res.body.msg, 'Hello World')
      t.equals(res.statusCode, 200)
      t.end()
    })
})


```

package.json scripts

```json
{
"scripts": {
    "test": "tape test/**/*_test.js | faucet",
    "start": "node server.js"
  }
}

```

 
