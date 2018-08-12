const express = require('express')
const categoriesData = require('../data/categories')
const productsData = require('../data/products')
const usersData = require('../data/users')

const router = new express.Router()

router.get('/', (req, res) => {
  const categories = categoriesData.total()
  const products = productsData.total()
  const users = usersData.total()

  res.status(200).json({
    categories,
    products,
    users
  })
})

module.exports = router
