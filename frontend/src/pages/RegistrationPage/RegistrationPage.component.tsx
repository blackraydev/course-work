import React from 'react';
import { useSelector } from 'react-redux';

import { RegistrationSection } from '../../components/RegistrationSection';
import { useActions } from '../../hooks/useActions';
import { PublicLayout } from '../../layouts/PublicLayout';
import { authLoadingSelector } from '../../store/Auth/selectors';
import { notificationContentSelector, notificationShowSelector } from '../../store/Notification/selectors';
import { Notification } from '../../UI/Notification';

export const RegistrationPage = () => {
  const { register, setNotification, showNotification, closeNotification } = useActions();
  const isAuthLoading = useSelector(authLoadingSelector);
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const registerProps = {
    register,
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
      <RegistrationSection {...registerProps} />
    </PublicLayout>
  );
};
