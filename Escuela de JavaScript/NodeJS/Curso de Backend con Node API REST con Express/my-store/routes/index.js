import productRouter from "./products.route"
import usersRouter from "./users.route"

const routerApi = (app) => {
  app.use('/products', productRouter)
  app.use('/users', usersRouter)
}

module.exports = routerApi
