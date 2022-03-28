import { IReview } from '../../models/IReview';
import { GAction } from '../../types/GAction';
import { REVIEWS_ACTIONS } from './constants';

interface IUsersState {
  reviews: Array<IReview>;
  isReviewsLoading: boolean;
  hasError: boolean;
}

const initialState: IUsersState = {
  reviews: [] as IReview[],
  isReviewsLoading: false,
  hasError: false,
};

type Action =
  | GAction<REVIEWS_ACTIONS.REQUEST_DATA | REVIEWS_ACTIONS.REQUEST_END | REVIEWS_ACTIONS.REJECT_DATA>
  | GAction<REVIEWS_ACTIONS.RECEIVE_DATA, { reviews: IReview[] }>;

export default (state = initialState, action: Action): IUsersState => {
  switch (action.type) {
    case REVIEWS_ACTIONS.REQUEST_DATA:
      return { ...state, isReviewsLoading: true };
    case REVIEWS_ACTIONS.RECEIVE_DATA:
      return { ...state, reviews: action.payload.reviews };
    case REVIEWS_ACTIONS.REJECT_DATA:
      return { ...state, isReviewsLoading: false, hasError: true };
    case REVIEWS_ACTIONS.REQUEST_END:
      return { ...state, isReviewsLoading: false, hasError: false };
    default:
      return state;
  }
};
