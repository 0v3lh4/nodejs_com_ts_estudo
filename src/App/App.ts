import express from 'express'

class App {
    public express: express.Express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes (): void {

    }
}