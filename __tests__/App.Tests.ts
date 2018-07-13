import request from 'supertest'
import App from '@src/App'

describe('APP GET', () => {
  it('/', (done) => {
    request(App)
      .get('/')
      .expect('content-type', /json/)
      .expect(200, {
        message: 'Hello World!'
      })
      .end(done)
  })
})
