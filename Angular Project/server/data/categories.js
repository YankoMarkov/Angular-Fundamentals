const categoryData = {}
let currentId = 0

module.exports = {
  total: () => Object.keys(categoryData).length,
  save: (category) => {
    const id = ++currentId
    category.id = id

    let newcategory = {
      id,
      name: category.name,
      createdOn: new Date(),
      createdBy: category.createdBy,
      products: []
    }

    categoryData[id] = newcategory
  },
  all: () => {
    return Object.values(categoryData)
  },
  findById: (id) => {
    return categoryData[id]
  },
  addProduct: (id, productId) => {
    categoryData[id].products.push(productId)
  },
  delete: (id) => {
    delete categoryData[id]
  },
  deleteProduct(id, productId) {
    let products = categoryData[id].products
    for (let i = 0; i < products.length; i++) {
      if (products[i] == productId) {
        categoryData[id].products.splice(i, 1)
      }
    }
  }
}
