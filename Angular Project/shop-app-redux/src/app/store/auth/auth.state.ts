import { RegisterModel } from "../../core/models/auth/register.model";

export interface AuthState {
  user: RegisterModel,
  token: string
}