const express = require('express')
const authCheck = require('../middleware/auth-check')
const productsData = require('../data/products')
const categoryData = require('../data/categories')

const router = new express.Router()

function validateProductForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'Name must be more than 3 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
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
  const product = req.body
  product.createdBy = req.user.email

  const validationResult = validateProductForm(product)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  productsData.save(product)


  res.status(200).json({
    success: true,
    message: 'Product added successfuly.',
    product
  })
})

router.get('/all', (req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  const product = productsData.all(page, search)

  res.status(200).json(product)
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id

  const product = productsData.findById(id)

  if (!product) {
    return res.status(200).json({
      success: false,
      message: 'Entry does not exists!'
    })
  }

  let response = {
    id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    createdOn: product.createdOn
  }

  res.status(200).json(response)
})


router.get('/mine', authCheck, (req, res) => {
  const user = req.user.email

  const product = productsData.byUser(user)

  res.status(200).json(product)
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user.email

  const product = productsData.findById(id);

  if (!product || (product.createdBy !== user && !req.user.roles.includes('Admin'))) {
    return res.status(404).json({
      success: false,
      message: 'Product does not exists!'
    })
  }

  productsData.delete(id)


  return res.status(200).json({
    success: true,
    message: 'Product deleted successfully!'
  })
})

router.delete('/deleteProduct/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user.email

  const product = productsData.findById(id);

  if (!product || (product.createdBy !== user && !req.user.roles.includes('Admin'))) {
    return res.status(404).json({
      success: false,
      message: 'Product does not exists!'
    })
  }

  productsData.deleteBuyer(id, user)

  return res.status(200).json({
    success: true,
    message: 'Product deleted successfully!'
  })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const user = req.user.email;
  const product = req.body;

  if (!product || !req.user.roles.includes('Admin')) {
    return res.status(404).json({
      success: false,
      message: 'Product does not exists!'
    })
  }

  const validationResult = validateProductForm(product)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  productsData.edit(id, product);

  return res.status(200).json({
    success: true,
    message: 'Product edited successfully!'
  })
})

router.put('/buy/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const user = req.user.email;
  const product = req.body;

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product does not exists!'
    })
  }

  const validationResult = validateProductForm(product)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }
  if (product.buyer.includes(user)) {
    return res.status(404).json({
      success: false,
      message: 'The user already has this product!'
    })
  }

  productsData.addBuyer(id, user);

  return res.status(200).json({
    success: true,
    message: 'Product added successfully to user!'
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  const product = productData.findById(id)

  if (!product) {
    return res.status(200).json({
      success: false,
      message: 'Entry does not exists!'
    })
  }

  let response = {
    id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image
  }

  res.status(200).json(response)
})

module.exports = router
