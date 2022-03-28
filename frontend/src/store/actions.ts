import authActions from './Auth/actions';
import usersActions from './Users/actions';
import notificationActions from './Notification/actions';
import reviewsActions from './Reviews/actions';

export default {
  ...authActions,
  ...usersActions,
  ...notificationActions,
  ...reviewsActions,
};
