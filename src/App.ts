import express from 'express'

class App {
  public express: express.Express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (_, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    this.express.use('/', router)
  }
}

export default new App().express
