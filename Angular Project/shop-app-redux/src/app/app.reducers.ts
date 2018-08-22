import { categoryReducer } from "./store/category/category.reducer";
import { productReducer } from "./store/products/product.reducer";

export const appReducers = {
  category: categoryReducer,
  product: productReducer
}