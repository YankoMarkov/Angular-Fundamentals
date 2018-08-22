import { CategoryState } from "./category/category.state";
import { ProductState } from "./products/product.state";

export interface AppState {
  category: CategoryState,
  product: ProductState
}