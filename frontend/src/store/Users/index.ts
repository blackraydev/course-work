import { IUser } from '../../models/IUser';
import { GAction } from '../../types/GAction';
import { USERS_ACTIONS } from './constants';

interface IUsersState {
  users: IUser[];
  isUsersLoading: boolean;
  hasError: boolean;
}

const initialState: IUsersState = {
  users: [] as IUser[],
  isUsersLoading: false,
  hasError: false,
};

type Action =
  | GAction<USERS_ACTIONS.REQUEST_DATA | USERS_ACTIONS.REQUEST_END | USERS_ACTIONS.REJECT_DATA>
  | GAction<USERS_ACTIONS.RECEIVE_DATA, { users: IUser[] }>;

export default (state = initialState, action: Action): IUsersState => {
  switch (action.type) {
    case USERS_ACTIONS.REQUEST_DATA:
      return { ...state, isUsersLoading: true };
    case USERS_ACTIONS.RECEIVE_DATA:
      return { ...state, users: action.payload.users };
    case USERS_ACTIONS.REJECT_DATA:
      return { ...state, isUsersLoading: false, hasError: true };
    case USERS_ACTIONS.REQUEST_END:
      return { ...state, isUsersLoading: false, hasError: false };
    default:
      return state;
  }
};
