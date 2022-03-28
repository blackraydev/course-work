import React from 'react';
import { useSelector } from 'react-redux';

import { Verify } from '../../components/Verify';
import { useActions } from '../../hooks/useActions';
import { PublicLayout } from '../../layouts/PublicLayout';
import { authUserSelector } from '../../store/Auth/selectors';

export const VerifyPage = () => {
  const { logout, sendActivationLink } = useActions();
  const user = useSelector(authUserSelector);

  const verifyProps = {
    logout,
    sendActivationLink,
    user,
  };

  return (
    <PublicLayout>
      <Verify {...verifyProps} />
    </PublicLayout>
  );
};
