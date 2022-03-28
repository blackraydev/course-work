import styled, { css } from 'styled-components';

import { COLORS } from '../../constants/colors';
import { getIconColorByType } from '../../utils/notificationIconsUtils';
import { Notification } from '../../types/Notification';

interface INotificationStyleProps {
  type: Notification;
}

export const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const NotificationWrapper = styled.div<INotificationStyleProps>`
  cursor: pointer;
  transition: 0.25s;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  min-width: 200px;
  max-width: 350px;
  padding: 15px;
  border-radius: 20px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.SECONDARY};

  &:hover {
    background-color: ${COLORS.NOTIFICATION_HOVER};
  }

  ${({ type }: INotificationStyleProps) => css`
    border: 1px solid ${getIconColorByType(type)};
  `}

  ${IconHolder} {
    ${({ type }: INotificationStyleProps) => css`
      fill: ${getIconColorByType(type)};
    `}
  }
`;
