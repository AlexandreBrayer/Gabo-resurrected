import mongoose from 'mongoose'
import { config } from 'dotenv'

export class MongoDbConnector {
  public async connect (): Promise<void> {
    config()
    if (process.env.DB_CON === undefined) {
      throw new Error('DB_CON not found')
    }
    try {
      await mongoose.connect(process.env.DB_CON)
      console.log('Database connected')
    } catch (error) {
      console.log(error)
    }
  }
}
