const test = require('tape')
const TestServer = require('fetch-test-server')

const app = require('../')
const server = new TestServer(app)

test('GET /', t => {
  server
    .fetch('/')
    .then(res => res.json())
    .then(data => {
      t.equals(data.msg, 'Hello World')
    })
    .then(() => {
      t.end()
    })
})

test.onFinish(() => server.close())
