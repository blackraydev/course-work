import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Profile } from '../../components/Profile';
import { ReviewSummary } from '../../components/ReviewSummary';
import { useActions } from '../../hooks/useActions';
import { PrivateLayout } from '../../layouts/PrivateLayout';
import { authUserSelector } from '../../store/Auth/selectors';
import { reviewsLoadingSelector, reviewsSelector } from '../../store/Reviews/selectors';
import { Button } from '../../UI/Button';

export const DashboardPage = () => {
  const { logout, getUserReviews } = useActions();
  const user = useSelector(authUserSelector);
  const userReviews = useSelector(reviewsSelector);
  const isReviewsLoading = useSelector(reviewsLoadingSelector);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    getUserReviews(user.id);
  }, []);

  return (
    <PrivateLayout>
      <div>
        <Profile user={user} />
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <ReviewSummary reviews={userReviews} isReviewsLoading={isReviewsLoading} user={user} />
    </PrivateLayout>
  );
};
