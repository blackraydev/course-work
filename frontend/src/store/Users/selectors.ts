import { IReduxState } from '..';

export const usersSelector = (state: IReduxState) => state.usersReducer.users;
export const usersLoadingSelector = (state: IReduxState) => state.usersReducer.isUsersLoading;
export const usersHasErrorSelector = (state: IReduxState) => state.usersReducer.hasError;
