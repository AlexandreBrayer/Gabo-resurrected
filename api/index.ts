import { MongoDbConnector } from './common/database/MongoDbConnector'
import express from 'express'
import userRoute from './domains/user/application/userRoute'

const database = new MongoDbConnector()
database.connect().catch(error => {
  console.log(error)
})

const app = express()

app.use(express.json())
app.use('/user', userRoute)
const port = 3000

app.listen(port, () => {
  console.log(`API Started on port ${port}`)
})
