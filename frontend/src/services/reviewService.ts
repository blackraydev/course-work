import { AxiosResponse } from 'axios';
import { ControllerNames } from '../constants/controllerNames';
import { IAuthResponse } from '../models/IAuthResponse';
import { IReview } from '../models/IReview';
import api from '../api';

export default class ReviewService {
  static async getAllReviews(userId: number): Promise<AxiosResponse<Array<IReview>>> {
    return api.post(`${ControllerNames.REVIEWS}/getAllReviews`, { userId });
  }

  static async getUserReviews(userId: number): Promise<AxiosResponse<Array<IReview>>> {
    return api.post(`${ControllerNames.REVIEWS}/getUserReviews`, { userId });
  }

  static async createReview(review: IReview): Promise<void> {
    return api.post(`${ControllerNames.REVIEWS}/createReview`, { review });
  }

  static async deleteReview(reviewId: number): Promise<AxiosResponse<IAuthResponse>> {
    return api.post(`${ControllerNames.REVIEWS}/deleteReview`, { reviewId });
  }
}
