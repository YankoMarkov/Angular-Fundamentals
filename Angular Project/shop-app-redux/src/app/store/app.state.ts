import { CategoryState } from "./category/category.state";
import { ProductState } from "./products/product.state";
import { AuthState } from "./auth/auth.state";

export interface AppState {
  category: CategoryState,
  product: ProductState,
  auth: AuthState
}