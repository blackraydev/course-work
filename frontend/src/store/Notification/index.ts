import { INotification } from '../../models/INotification';
import { GAction } from '../../types/GAction';
import { NOTIFICATION_ACTIONS } from './constants';

interface INotificationState {
  notification: INotification;
  toShow: boolean;
}

const initialState: INotificationState = {
  notification: {} as INotification,
  toShow: false,
};

type Action =
  | GAction<NOTIFICATION_ACTIONS.SHOW_NOTIFICATION | NOTIFICATION_ACTIONS.CLOSE_NOTIFICATION>
  | GAction<NOTIFICATION_ACTIONS.SET_NOTIFICATION, INotification>;

export default (state = initialState, action: Action): INotificationState => {
  switch (action.type) {
    case NOTIFICATION_ACTIONS.SHOW_NOTIFICATION:
      return { ...state, toShow: true };
    case NOTIFICATION_ACTIONS.SET_NOTIFICATION:
      return { ...state, notification: action.payload };
    case NOTIFICATION_ACTIONS.CLOSE_NOTIFICATION:
      return { ...state, toShow: false };
    default:
      return state;
  }
};
