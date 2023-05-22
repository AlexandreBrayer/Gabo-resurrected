import { type Types as MongooseTypes } from 'mongoose'
import { type UserSchema } from './UserSchema'

export interface User extends UserSchema {
  _id: MongooseTypes.ObjectId
}
