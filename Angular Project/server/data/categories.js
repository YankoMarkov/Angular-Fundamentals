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
    return Object.keys(categoryData)
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
    for (let i = 0; i < categoryData[id].products.length; i++) {
      if (categoryData[id].products[i] == productId) {
        categoryData[id].products.splice(i, 1)
      }
    }
  }
}
