const test = require('tape')
const TestServer = require('fetch-test-server')

const app = require('../')
const server = new TestServer(app)

test('GET /foo', t => {
  server
    .fetch('/foo')
    .then(res => res.json())
    .then(data => {
      t.equals(data.msg, 'Hello Foo')
    })
    .then(() => {
      t.end()
    })
})

test.onFinish(() => server.close())
