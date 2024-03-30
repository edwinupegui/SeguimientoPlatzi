const { faker } = require('@faker-js/faker')

class ProductService {

  constructor() {
    this.products = [];
    this.faker();
  }

  faker(quantity = 100) {
    for (let i = 0; i < quantity; i++) {
      this.products.push({
        id: i + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      });
    }

  }

  create(product = {}) {
    const newProduct = {
      id: this.products[this.products.length - 1].id + 1,
      name: product.name,
      price: parseInt(product.price),
      image: product.image
    }
    this.products.push(newProduct);

    return newProduct;
  }

  find(filter = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.products.slice(filter.offset | 0, filter.limit ? parseInt(filter.limit) + parseInt((filter.offset | 0)) : undefined)
        )
      }, 5000);
    })
  }


  findOne(id) {
    return this.products.find((p) => p.id = id);
  }

  update(id, changes = {}) {
    const product = this.products.find((prod) => prod.id === id);
    const idx = this.products.findIndex((prod) => prod.id === id);
    if (product) {
      this.products[idx] = {
        id: product.id,
        name: changes.name || product.name,
        price: changes.price || product.price,
        image: changes.image || product.image
      };
      return product;
    } else {
      throw new Error('product not found')
    }
  }


  delete(id) {
    const product = { ...this.products.find((prod) => prod.id === id) };
    console.log(product)
    if (product) {
      this.products = this.products.filter((p) => p.id !== id);
      return product;
    }
  }
}

module.exports = ProductService;
