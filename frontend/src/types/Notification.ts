import { NotificationTypes } from '../constants/notifications';

export type Notification =
  | NotificationTypes.SUCCESS
  | NotificationTypes.INFO
  | NotificationTypes.WARNING
  | NotificationTypes.ERROR;
