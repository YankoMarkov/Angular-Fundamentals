const productData = {}
let currentId = 0

module.exports = {
  total: () => Object.keys(productData).length,
  save: (product) => {
    const id = ++currentId
    product.id = id

    let newproduct = {
      id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      createdOn: new Date(),
      createdBy: product.createdBy,
      buyer: [],
      likes: [],
      reviews: [],
      category: product.category
    }

    productData[id] = newproduct
  },
  all: (page, search) => {
    const pageSize = 10

    let starti = (page - 1) * pageSize
    let endi = starti + pageSize

    return Object
      .keys(productData)
      .map(key => productData[key])
      .filter(product => {
        if (!search) {
          return true
        }

        const productName = product.name.toLowerCase()
        const searchTerm = search.toLowerCase()

        return productName.indexOf(searchTerm) >= 0
      })
      .sort((a, b) => b.id - a.id)
      .slice(starti, endi)
  },
  findById: (id) => {
    return productData[id]
  },
  addReview: (id, rating, comment, user) => {
    const review = {
      rating,
      comment,
      user,
      createdOn: new Date()
    }

    productData[id].reviews.push(review)
  },
  allReviews: (id) => {
    return productData[id].reviews
      .sort((a, b) => b.createdOn - a.createdOn)
      .slice(0)
  },
  like: (id, user) => {
    const likes = productData[id].likes

    if (likes.indexOf(user) >= 0) {
      return false
    }

    likes.push(user)

    return true
  },
  addBuyer: (id, user) => {
    productData[id].buyer.push(user)
  },
  addCategory: (id, category) => {
    productData[id].category = category
  },
  byUser: (user) => {
    return Object
      .keys(productData)
      .map(key => productData[key])
      .filter(product => product.buyer.includes(user))
  },
  delete: (id) => {
    delete productData[+id]
  },
  deleteBuyer(id, user) {
    let buyer = productData[id].buyer
    for (let i = 0; i < buyer.length; i++) {
      if (buyer[i] == user) {
        productData[id].buyer.splice(i, 1)
      }
    }
  },
  edit: (id, newItem) => {
    newItem['id'] = id;
    newItem['createdBy'] = productData[id]['createdBy'];
    productData[id] = newItem;
  }
}
