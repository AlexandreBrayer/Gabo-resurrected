import UserSchema from './Schemas/UserSchema'
import { type User } from '../interfaces/User'
import { type UserSchema as UserSchemaType } from '../interfaces/UserSchema'
export async function getUserList (page: number, size: number): Promise<User[]> {
  const users = await UserSchema.find()
    .skip((page - 1) * size)
    .limit(size)
    .select('-__v -password -email')
  return users
}

export async function createUser (user: UserSchemaType): Promise<User> {
  const newUser = await UserSchema.create(user)
  return newUser
}
