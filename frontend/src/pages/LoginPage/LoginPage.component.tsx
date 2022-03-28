import React from 'react';
import { useSelector } from 'react-redux';

import { LoginSection } from '../../components/LoginSection';
import { useActions } from '../../hooks/useActions';
import { PublicLayout } from '../../layouts/PublicLayout';
import { authLoadingSelector } from '../../store/Auth/selectors';
import { notificationContentSelector, notificationShowSelector } from '../../store/Notification/selectors';
import { Notification } from '../../UI/Notification';

export const LoginPage = () => {
  const { login, setNotification, showNotification, closeNotification } = useActions();
  const isAuthLoading = useSelector(authLoadingSelector);
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const loginProps = {
    login,
    setNotification,
    showNotification,
    closeNotification,
    isAuthLoading,
  };

  const notificationProps = {
    ...notificationContent,
    onClick: closeNotification,
  };

  return (
    <PublicLayout>
      {toShowNotification && <Notification {...notificationProps} />}
      <LoginSection {...loginProps} />
    </PublicLayout>
  );
};
