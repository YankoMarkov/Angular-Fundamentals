import { categoryReducer } from "./store/category/category.reducer";
import { productReducer } from "./store/products/product.reducer";
import { authReducer } from "./store/auth/auth.reducer";

export const appReducers = {
  category: categoryReducer,
  product: productReducer,
  auth: authReducer
}