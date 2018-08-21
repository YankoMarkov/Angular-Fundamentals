import { ProductModel } from "../../core/models/product/product.model";
import { ReviewModel } from "../../core/models/review/review.model";

export interface ProductState {
  product: ProductModel,
  productDetails: ProductModel,
  all: ProductModel[],
  myProducts: ProductModel[],
  productReviews: ReviewModel[],
  likes: Array<string>,
  searchedProducts: ProductModel[]
}