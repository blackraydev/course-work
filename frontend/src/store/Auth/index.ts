import { IUser } from '../../models/IUser';
import { GAction } from '../../types/GAction';
import { AUTH_ACTIONS } from './constants';

interface IAuthState {
  user: IUser;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  isTokenCheckLoading: boolean;
  hasError: boolean;
}

const initialState: IAuthState = {
  user: {} as IUser,
  isAuthenticated: false,
  isAuthLoading: false,
  isTokenCheckLoading: false,
  hasError: false,
};

type Action =
  | GAction<
      AUTH_ACTIONS.REQUEST_DATA | AUTH_ACTIONS.REQUEST_END | AUTH_ACTIONS.REJECT_DATA | AUTH_ACTIONS.CHECK_TOKEN
    >
  | GAction<AUTH_ACTIONS.RECEIVE_DATA, { isAuthenticated: boolean; user: IUser }>;

export default (state = initialState, action: Action): IAuthState => {
  switch (action.type) {
    case AUTH_ACTIONS.REQUEST_DATA:
      return { ...state, isAuthLoading: true };
    case AUTH_ACTIONS.RECEIVE_DATA:
      return { ...state, isAuthenticated: action.payload.isAuthenticated, user: action.payload.user };
    case AUTH_ACTIONS.CHECK_TOKEN:
      return { ...state, isTokenCheckLoading: true };
    case AUTH_ACTIONS.REJECT_DATA:
      return { ...state, isAuthLoading: false, isTokenCheckLoading: false, hasError: true };
    case AUTH_ACTIONS.REQUEST_END:
      return { ...state, isAuthLoading: false, isTokenCheckLoading: false, hasError: false };
    default:
      return state;
  }
};
