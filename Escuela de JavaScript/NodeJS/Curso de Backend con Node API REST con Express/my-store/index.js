const express = require('express');
import routerApi from './routes';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'producto 5',
    price: 5000
  })
})

routerApi(app)

app.listen(port, () => {
  console.log(port)
})

