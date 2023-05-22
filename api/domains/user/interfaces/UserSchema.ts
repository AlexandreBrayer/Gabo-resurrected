type role = 'user' | 'admin' | 'guest'

export interface UserSchema {
  name: string
  email: string
  password: string
  token?: string
  role?: role
}
