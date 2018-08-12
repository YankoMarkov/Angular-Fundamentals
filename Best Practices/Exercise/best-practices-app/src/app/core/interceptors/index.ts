import { AuthInterceptor } from "./auth/auth.inteceptor";
import { ErrorInterceptor } from "./error/error.interceptor";

export const interceptors = [
  AuthInterceptor,
  ErrorInterceptor
]