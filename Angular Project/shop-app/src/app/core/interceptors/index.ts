import { AuthInterceptor } from "./auth/auth.inteceptor";
import { ErrorInterceptor } from "./error/error.interceptor";
import { CategoryInterceptor } from "./category/category.interceptor";
import { ProductInterceptor } from "./product/product.interceptor";

export const interceptors = [
  AuthInterceptor,
  ErrorInterceptor,
  CategoryInterceptor,
  ProductInterceptor
]