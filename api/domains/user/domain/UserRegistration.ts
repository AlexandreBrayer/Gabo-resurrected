import { createUser, getUserList } from '../infra/UserDatabase'
import { type UserSchema } from '../interfaces/UserSchema'
import { type User } from '../interfaces/User'
import bcrypt from 'bcrypt'

export async function UserRegistration (user: UserSchema): Promise<User> {
  const hash = await bcrypt.hash(user.password, 10)
  user.password = hash
  const newUser = await createUser(user)
  return newUser
}

export async function UserList (page: number, size: number): Promise<User[]> {
  const users = await getUserList(page, size)
  return users
}
