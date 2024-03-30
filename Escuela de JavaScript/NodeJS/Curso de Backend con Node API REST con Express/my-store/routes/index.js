const express = require('express');

const productRouter = require('./products.route')
const categoriesRouter = require('./categories.route')
const usersRouter = require('./users.route')

const routerApi = (app) => {
  const router = express.Router()

  app.use('/api/v1', router)

  router.use('/products', productRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApi
