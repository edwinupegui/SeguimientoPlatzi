const express = require('express');
const router = express.Router();
const productService = require('../services/product.service');
const product = new productService();

router.get('/', async (req, res) => {
  let { limit, offset } = req.query;
  res.json(await product.find({ offset, limit }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(product.findOne(id));
});


router.post("/", (req, res) => {
  const { name, price, image } = req.body;

  const newProduct = product.create({ name, price, image });
  if (newProduct) {
    res.status(201).json({
      message: "Product added",
      data: newProduct
    });

  } else
    res.status(501).json({ message: "internal error" });
});


router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price, image } = req.body;
    const updateProduct = await product.update(id, { name, price, image });
    if (updateProduct) {
      res.json({
        message: "Product updated",
        data: req.body
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }

});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentProduct = product.delete(id);
  if (currentProduct) {
    res.status(201).json({ message: "Product deleted", data: currentProduct });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


module.exports = router;
