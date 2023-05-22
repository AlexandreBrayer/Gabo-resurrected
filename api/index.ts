import { MongoDbConnector } from './common/database/MongoDbConnector'
import express from 'express'
const database = new MongoDbConnector

database.connect()

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`API Started on port ${port}`)
})
