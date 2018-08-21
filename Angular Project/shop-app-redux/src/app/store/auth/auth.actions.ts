import { RegisterModel } from "../../core/models/auth/register.model";
import { LoginModel } from "../../core/models/auth/login.model";
import { Action } from '@ngrx/store';

export const REGISTER_USER = '[AUTH] Register';
export const LOGIN_USER = '[AUTH] Login';
export const LOGOUT_USER = '[AUTH] Logout';

export class RegisterUserAction implements Action {
  readonly type: string = REGISTER_USER;
  constructor(public payload: RegisterModel) { }
}

export class LoginUserAction implements Action {
  readonly type: string = LOGIN_USER;
  constructor(public payload: LoginModel) { }
}

export class LogoutUserAction implements Action {
  readonly type: string = LOGOUT_USER;
  constructor(public payload: LoginModel) { }
}

export type Types = RegisterUserAction
  | LoginUserAction
  | LogoutUserAction;