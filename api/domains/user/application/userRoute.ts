import express, { type Request, type Response } from 'express'
import { UserRegistration, UserList } from '../domain/UserRegistration'
import { type UserSchema } from '../interfaces/UserSchema'

const router = express.Router()

router.post('/register', async (req: Request, res: Response) => {
  const { name, email, password }: UserSchema = req.body
  const user = await UserRegistration({ name, email, password })
  res.status(201).json(user)
})

router.get('/list', async (req: Request, res: Response) => {
  const { page = '1', size = '10' } = req.query
  if (typeof page !== 'string' || typeof size !== 'string') {
    res.status(400).json({ message: 'Invalid query params' })
    return
  }
  const users = await UserList(parseInt(page), parseInt(size))
  res.status(200).json(users)
})

export default router
