import { IReduxState } from '..';

export const authUserSelector = (state: IReduxState) => state.authReducer.user;
export const authCheckSelector = (state: IReduxState) => state.authReducer.isAuthenticated;
export const authLoadingSelector = (state: IReduxState) => state.authReducer.isAuthLoading;
export const authTokenLoadingSelector = (state: IReduxState) => state.authReducer.isTokenCheckLoading;
export const authErrorSelector = (state: IReduxState) => state.authReducer.hasError;
