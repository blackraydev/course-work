import { IReduxState } from '..';

export const reviewsSelector = (state: IReduxState) => state.reviewsReducer.reviews;
export const reviewsLoadingSelector = (state: IReduxState) => state.reviewsReducer.isReviewsLoading;
export const reviewsHasErrorSelector = (state: IReduxState) => state.reviewsReducer.hasError;
