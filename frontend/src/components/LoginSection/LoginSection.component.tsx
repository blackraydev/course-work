import React, { useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import validator from 'validator';
import { useHistory } from 'react-router';

import { PublicRoutes } from '../../constants/routeNames';
import { NotificationTypes } from '../../constants/notifications';
import { CLIENT_ERRORS } from '../../constants/errors';
import { Notification } from '../../types/Notification';
import { Section } from '../../UI/Section';
import { Button } from '../../UI/Button';
import { Input } from '../../UI/Input';
import { LoadingSpinner } from '../../UI/LoadingSpinner';

interface ILoginSectionProps {
  login: (email: string, password: string) => (dispatch: Dispatch) => Promise<void>;
  setNotification: (text: string, type: Notification) => {};
  showNotification: () => {};
  closeNotification: () => {};
  isAuthLoading: boolean;
}

export const LoginSection: React.FC<ILoginSectionProps> = ({
  login,
  setNotification,
  showNotification,
  closeNotification,
  isAuthLoading,
}) => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setEmailHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
    },
    [email]
  );

  const setPasswordHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value);
    },
    [password]
  );

  const isFormHasErrors = useCallback((): boolean => {
    if (!validator.isEmail(email)) {
      return showWarning(CLIENT_ERRORS.INCORRECT_EMAIL);
    }

    if (password.length < 6) {
      return showWarning(CLIENT_ERRORS.PASSWORD_MIN_LENGTH);
    }

    closeNotification();

    return false;
  }, [email, password]);

  const showWarning = useCallback((warningMessage): boolean => {
    setNotification(warningMessage, NotificationTypes.WARNING);
    showNotification();
    return true;
  }, []);

  const loginHandler = useCallback((): void => {
    if (!isFormHasErrors()) {
      login(email, password);
    }
  }, [email, password]);

  const authTypeHandler = useCallback((): void => {
    history.push(PublicRoutes.REGISTRATION);
  }, []);

  return (
    <Section
      title="Sign in"
      description="Login into system to manage your account."
      outerText="Don't have an account?"
      innerText="Sign up"
      authTypeHandler={authTypeHandler}
    >
      <Input value={email} onChange={setEmailHandler} label="Your Email" placeholder="Email" />
      <Input
        value={password}
        onChange={setPasswordHandler}
        label="Your Password"
        placeholder="Password"
        type="password"
      />
      {isAuthLoading ? <LoadingSpinner /> : <Button onClick={loginHandler}>Sign in</Button>}
    </Section>
  );
};
