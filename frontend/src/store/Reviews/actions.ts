import { Dispatch } from 'redux';
import { REVIEWS_ACTIONS } from './constants';
import ReviewService from '../../services/reviewService';
import { IReview } from '../../models/IReview';

export const getAllReviews =
  (userId: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await ReviewService.getAllReviews(userId);
      const reviews: Array<IReview> = response.data;

      dispatch(receiveData({ reviews }));
      dispatch(requestEnd());
    } catch (e: any) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const getUserReviews =
  (userId: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await ReviewService.getUserReviews(userId);
      const reviews: Array<IReview> = response.data;

      dispatch(receiveData({ reviews }));
      dispatch(requestEnd());
    } catch (e: any) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const createReview =
  (review: IReview) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await ReviewService.createReview(review);

      dispatch(requestEnd());
    } catch (e: any) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const deleteReview =
  (reviewId: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await ReviewService.deleteReview(reviewId);

      dispatch(requestEnd());
    } catch (e: any) {
      console.log(e);
      dispatch(rejectData());
    }
  };

const requestData = () => ({
  type: REVIEWS_ACTIONS.REQUEST_DATA,
});

const receiveData = (payload: any) => ({
  type: REVIEWS_ACTIONS.RECEIVE_DATA,
  payload: payload,
});

const rejectData = () => ({
  type: REVIEWS_ACTIONS.REJECT_DATA,
});

const requestEnd = () => ({
  type: REVIEWS_ACTIONS.REQUEST_END,
});

export default {
  getAllReviews,
  getUserReviews,
  createReview,
  deleteReview,
};
