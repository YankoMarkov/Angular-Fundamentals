import { CategoryModel } from "../../core/models/category/category.model";
import { ProductModel } from "../../core/models/product/product.model";

export interface CategoryState {
  category: CategoryModel,
  all: CategoryModel[],
  moreByCategory: ProductModel[]
}