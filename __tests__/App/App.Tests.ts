import supertest from 'supertest'
import App from '@src/App'

describe('app', () => {
  it('works', () => {
    supertest(App)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Hello World1'
      })
  })
})
