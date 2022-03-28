import React from 'react';

import { IReview } from '../../models/IReview';
import { IUser } from '../../models/IUser';
import { LoadingSpinner } from '../../UI/LoadingSpinner';
import { Review } from '../Review';

import * as UI from './ReviewSummary.styles';

interface IReviewSummaryProps {
  reviews: Array<IReview>;
  isReviewsLoading: boolean;
  user: IUser;
}

export const ReviewSummary: React.FC<IReviewSummaryProps> = ({ reviews, isReviewsLoading, user }) => {
  const renderContent = () => {
    if (isReviewsLoading) {
      return <LoadingSpinner />;
    }

    if (reviews.length > 0) {
      return reviews.map((review) => <Review review={review} user={user} />);
    }

    return <UI.NoReviewsText>There's no reviews yet</UI.NoReviewsText>;
  };

  return <UI.ReviewSummaryWrapper>{renderContent()}</UI.ReviewSummaryWrapper>;
};
