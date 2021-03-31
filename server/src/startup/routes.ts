import express, { Express } from 'express'
import cors from 'cors'
import { errorHandler } from '../middleware/errorHandler'

import { productsReducer } from '../routes/products'
import { commentReducer } from '../routes/comments'
import { usersReducer } from '../routes/users'
import { authReducer } from '../routes/auth'

// Handle asycn errors in request pipeline
require('express-async-errors')

export function startupRoutes(app: Express): void {
  app.use(cors())
  app.use(express.static('uploads'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.set('view engine', 'ejs')

  app.use('/auth', authReducer)
  app.use('/users', usersReducer)
  app.use('/products', productsReducer)
  app.use('/comments', commentReducer)


  app

  //Error handling middleware in request pipeline
  app.use(errorHandler)
}
