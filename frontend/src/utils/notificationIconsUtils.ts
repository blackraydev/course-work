import CheckMarkIcon from '../components/Icons/CheckMarkIcon';
import ErrorIcon from '../components/Icons/ErrorIcon';
import ExclamationIcon from '../components/Icons/ExclamationIcon';
import WarningIcon from '../components/Icons/WarningIcon';
import { NotificationTypes } from '../constants/notifications';
import { Notification } from '../types/Notification';
import { COLORS } from '../constants/colors';

export const getIconByType = (type: Notification) => {
  switch (type) {
    case NotificationTypes.SUCCESS:
      return CheckMarkIcon;
    case NotificationTypes.INFO:
      return ExclamationIcon;
    case NotificationTypes.WARNING:
      return WarningIcon;
    case NotificationTypes.ERROR:
      return ErrorIcon;
  }
};

export const getIconColorByType = (type: Notification) => {
  switch (type) {
    case NotificationTypes.SUCCESS:
      return COLORS.SUCCESS_ICON;
    case NotificationTypes.INFO:
      return COLORS.INFO_ICON;
    case NotificationTypes.WARNING:
      return COLORS.WARNING_ICON;
    case NotificationTypes.ERROR:
      return COLORS.ERROR_ICON;
  }
};
