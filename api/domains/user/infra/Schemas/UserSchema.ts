import { Schema, model } from 'mongoose'
import type { UserSchema } from '../../interfaces/UserSchema'

const UserModel = new Schema<UserSchema>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  },
  role: {
    type: String,
    default: 'user'
  }
})

export default model('User', UserModel)
