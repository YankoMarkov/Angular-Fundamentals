import { AuthState } from "./auth.state";
import * as AuthAction from './auth.actions';

const initialState: AuthState = {
  user: null,
  token: null
}

function registerUser(state, registerUser) {
  return {
    ...state,
    user: registerUser
  }
}

export function authReducer(
  state: AuthState = initialState,
  action: AuthAction.Types
) {
  switch (action.type) {
    case AuthAction.REGISTER_USER:
      return registerUser(state, action.payload);
    default:
      return state;
  }
}