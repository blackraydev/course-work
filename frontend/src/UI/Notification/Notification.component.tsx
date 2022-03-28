import React from 'react';

import { getIconByType } from '../../utils/notificationIconsUtils';
import { INotification } from '../../models/INotification';

import * as UI from './Notification.styles';

interface INotificationProps extends INotification {
  onClick: () => {};
}

export const Notification: React.FC<INotificationProps> = ({ text, type, onClick }) => {
  return (
    <UI.NotificationWrapper onClick={onClick} type={type}>
      <UI.IconHolder>{getIconByType(type)}</UI.IconHolder>
      {text}
    </UI.NotificationWrapper>
  );
};
