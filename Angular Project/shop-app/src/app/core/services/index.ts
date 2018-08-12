import { AuthService } from "./auth/auth.service";
import { HomeService } from "./home/home.service";
import { ProductService } from "./product/product.service";
import { CategoryService } from "./category/category.service";

export const allServices = [
  AuthService,
  ProductService,
  CategoryService,
  HomeService
]