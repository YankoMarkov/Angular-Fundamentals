const express = require('express')
const authCheck = require('../middleware/auth-check')
const categoryData = require('../data/categories')
const productData = require('../data/products')

const router = new express.Router()

function validateCategoryForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 2) {
    isFormValid = false
    errors.name = 'Name must be more than 2 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const category = req.body
  category.createdBy = req.user.email

  const validationResult = validateCategoryForm(category)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  let categories = categoryData.all()
  for (let c of categories) {
    if (c.name == category.name) {
      return res.status(404).json({
        success: false,
        message: 'Category alredy exists!'
      })
    }
  }

  categoryData.save(category)

  res.status(200).json({
    success: true,
    message: 'Category added successfuly.',
    category
  })
})

router.get('/all', (req, res) => {

  const categories = categoryData.all()

  res.status(200).json(categories)
})

router.get('/more/:id', (req, res) => {
  const id = req.params.id
  const products = []
  let tempProducts = []

  const category = categoryData.findById(id)

  if (!category) {
    return res.status(404).json({
      success: false,
      message: 'Category does not exists!'
    })
  }
  tempProducts = category.products
  if (tempProducts.length == 0) {
    return res.status(404).json({
      success: false,
      message: 'Products does not exists!'
    })
  }
  for (let id of tempProducts) {
    let product = productData.findById(id)
    if (product) {
      products.push(product)
    }
  }

  res.status(200).json(products)
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user.email
  let tempProducts = []

  const category = categoryData.findById(id);

  if (!category || (category.createdBy !== user && !req.user.roles.includes('Admin'))) {
    return res.status(404).json({
      success: false,
      message: 'Category does not exists!'
    })
  }
  tempProducts = category.products
  if (tempProducts.length > 0) {
    return res.status(404).json({
      success: false,
      message: 'Category products is not empty!'
    })
  }

  categoryData.delete(id)

  return res.status(200).json({
    success: true,
    message: 'category deleted successfully!'
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  const category = categoryData.findById(id)

  if (!category) {
    return res.status(404).json({
      success: false,
      message: 'Category does not exists!'
    })
  }

  res.status(200).json(category)
})

module.exports = router
