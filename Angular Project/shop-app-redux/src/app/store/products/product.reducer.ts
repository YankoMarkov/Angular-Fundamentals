import { ProductState } from './product.state';
import * as ProductActions from './product.actions';

const initialState: ProductState = {
  product: null,
  productDetails: null,
  all: [],
  myProducts: [],
  productReviews: [],
  likes: [],
  searchedProducts: []
}

function getAllProducts(state, allProducts) {
  return {
    ...state,
    all: allProducts
  }
}

function getMyProducts(state, myProducts) {
  return {
    ...state,
    myProducts: myProducts
  }
}

function deleteProduct(state, deleteProduct) {
  if (deleteProduct.success) {
    const id = deleteProduct.id;
    const productIndex = state.all.findIndex(p => p.id === id);

    if (productIndex >= 0) {
      const products = state.all.slice(0);
      products.splice(productIndex, 1);
      return {
        ...state,
        all: products
      }
    }
  }
  return state;
}

function deleteMyProduct(state, deleteMyProduct) {
  if (deleteMyProduct.success) {
    const id = deleteMyProduct.id;
    const productIndex = state.myProducts.findIndex(p => p.id === id);

    if (productIndex >= 0) {
      const products = state.myProducts.slice(0);
      products.splice(productIndex, 1);
      return {
        ...state,
        myProducts: products
      }
    }
  }
  return state;
}

function createProduct(state, createProduct) {
  const products = state.all.slice(0);
  products.push(createProduct.product);
  return {
    ...state,
    all: products
  }
}

function getProduct(state, getProduct) {
  return {
    ...state,
    product: getProduct
  }
}

function getProductDetails(state, productDetails) {
  return {
    ...state,
    productDetails: productDetails
  }
}

function buyProduct(state, buyProduct) {
  const products = state.myProducts.slice(0);
  products.push(buyProduct.product);
  return {
    ...state,
    myProducts: products
  }
}

function editProduct(state, editProduct) {
  const id = editProduct.id;
  const productIndex = state.all.findIndex(p => p.id === id);

  if (productIndex >= 0) {
    const products = state.all.slice(0);
    products[productIndex] = editProduct.product;
    return {
      ...state,
      all: products
    }
  }
  return state;
}

function addProductReviews(state, productReviews) {
  const reviews = state.productReviews.slice(0);
  reviews.push(productReviews.review)
  return {
    ...state,
    productReviews: reviews
  }
}

function getProductReviews(state, productReviews) {
  return {
    ...state,
    productReviews: productReviews
  }
}

function addLikes(state, addLikes) {
  if (addLikes.success) {
    let user = addLikes.user;
    let likes = state.likes.slice(0);
    likes.push(user);
    return {
      ...state,
      likes: likes
    }
  }
  return state;
}

function addSearchedProducts(state, searchedProducts) {
  return {
    ...state,
    searchedProducts: searchedProducts
  }
}

export function productReducer(
  state: ProductState = initialState,
  action: ProductActions.Types
) {
  switch (action.type) {
    case ProductActions.ADD_SEARCHED_PRODUCTS:
      return addSearchedProducts(state, action.payload);
    case ProductActions.ADD_LIKES:
      return addLikes(state, action.payload);
    case ProductActions.GET_PRODUCT_REVIEWS:
      return getProductReviews(state, action.payload);
    case ProductActions.ADD_PRODUCT_REVIEWS:
      return addProductReviews(state, action.payload);
    case ProductActions.EDIT_PRODUCT:
      return editProduct(state, action.payload);
    case ProductActions.PRODUCT_DETAILS:
      return getProductDetails(state, action.payload);
    case ProductActions.BUY_PRODUCT:
      return buyProduct(state, action.payload);
    case ProductActions.GET_PRODUCT:
      return getProduct(state, action.payload);
    case ProductActions.CREATE_PRODUCT:
      return createProduct(state, action.payload);
    case ProductActions.DELETE_PRODUCT:
      return deleteProduct(state, action.payload);
    case ProductActions.DELETE_MY_PRODUCT:
      return deleteMyProduct(state, action.payload);
    case ProductActions.ALL_PRODUCTS:
      return getAllProducts(state, action.payload);
    case ProductActions.MY_PRODUCTS:
      return getMyProducts(state, action.payload);
    default:
      return state;
  }
}