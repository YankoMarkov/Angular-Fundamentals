import { Action } from '@ngrx/store';
import { ProductModel } from '../../core/models/product/product.model';
import { ReviewModel } from '../../core/models/review/review.model';

export const ALL_PRODUCTS = '[PRODUCT] AllProducts';
export const MY_PRODUCTS = '[PRODUCT] MyProducts';
export const DELETE_PRODUCT = '[PRODUCT] DeleteProduct';
export const DELETE_MY_PRODUCT = '[PRODUCT] DeleteMyProduct';
export const CREATE_PRODUCT = '[PRODUCT] CreateProduct';
export const GET_PRODUCT = '[PRODUCT] CetProduct';
export const PRODUCT_DETAILS = '[PRODUCT] ProductDetails';
export const BUY_PRODUCT = '[PRODUCT] BuyProduct';
export const EDIT_PRODUCT = '[PRODUCT] EditProduct';
export const ADD_PRODUCT_REVIEWS = '[PRODUCT] AddProductReviews';
export const GET_PRODUCT_REVIEWS = '[PRODUCT] GetProductReviews';
export const ADD_LIKES = '[PRODUCT] AddLikes';
export const ADD_SEARCHED_PRODUCTS = '[PRODUCT] AddSearchedProducts';

export class AllProductsAction implements Action {
  readonly type: string = ALL_PRODUCTS;
  constructor(public payload: ProductModel[]) { }
}

export class MyProductsAction implements Action {
  readonly type: string = MY_PRODUCTS;
  constructor(public payload: ProductModel[]) { }
}

export class DeleteProductAction implements Action {
  readonly type: string = DELETE_PRODUCT;
  constructor(public payload: object) { }
}

export class DeleteMyProductAction implements Action {
  readonly type: string = DELETE_MY_PRODUCT;
  constructor(public payload: object) { }
}

export class CreateProductAction implements Action {
  readonly type: string = CREATE_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class GetProductAction implements Action {
  readonly type: string = GET_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class ProductDetailsAction implements Action {
  readonly type: string = PRODUCT_DETAILS;
  constructor(public payload: ProductModel) { }
}

export class BuyProductAction implements Action {
  readonly type: string = BUY_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class EditProductAction implements Action {
  readonly type: string = EDIT_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class AddProductReviewsAction implements Action {
  readonly type: string = ADD_PRODUCT_REVIEWS;
  constructor(public payload: ReviewModel) { }
}

export class GetProductReviewsAction implements Action {
  readonly type: string = GET_PRODUCT_REVIEWS;
  constructor(public payload: ReviewModel) { }
}

export class AddLikesAction implements Action {
  readonly type: string = ADD_LIKES;
  constructor(public payload: object) { }
}

export class AddSearchedProductsAction implements Action {
  readonly type: string = ADD_SEARCHED_PRODUCTS;
  constructor(public payload: ProductModel[]) { }
}

export type Types = AllProductsAction
  | MyProductsAction
  | DeleteProductAction
  | DeleteMyProductAction
  | CreateProductAction
  | GetProductAction
  | ProductDetailsAction
  | BuyProductAction
  | EditProductAction
  | AddProductReviewsAction
  | GetProductReviewsAction
  | AddLikesAction
  | AddSearchedProductsAction;