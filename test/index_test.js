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
