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

interface IRegistrationSectionProps {
  register: (email: string, password: string) => (dispatch: Dispatch) => Promise<void>;
  setNotification: (text: string, type: Notification) => {};
  showNotification: () => {};
  closeNotification: () => {};
  isAuthLoading: boolean;
}

export const RegistrationSection: React.FC<IRegistrationSectionProps> = ({
  register,
  setNotification,
  showNotification,
  closeNotification,
  isAuthLoading,
}) => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

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

  const setRepeatedPasswordHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRepeatedPassword(e.currentTarget.value);
    },
    [repeatedPassword]
  );

  const showWarning = useCallback((warningMessage): boolean => {
    setNotification(warningMessage, NotificationTypes.WARNING);
    showNotification();
    return true;
  }, []);

  const isFormHasErrors = useCallback((): boolean => {
    if (!validator.isEmail(email)) {
      return showWarning(CLIENT_ERRORS.INCORRECT_EMAIL);
    }

    if (password.length < 6) {
      return showWarning(CLIENT_ERRORS.PASSWORD_MIN_LENGTH);
    }

    if (password !== repeatedPassword) {
      return showWarning(CLIENT_ERRORS.PASSWORDS_NOT_MATCH);
    }

    closeNotification();

    return false;
  }, [email, password, repeatedPassword]);

  const registrationHandler = useCallback((): void => {
    if (!isFormHasErrors()) {
      register(email, password);
    }
  }, [email, password, repeatedPassword]);

  const authTypeHandler = useCallback((): void => {
    history.push(PublicRoutes.LOGIN);
  }, []);

  return (
    <Section
      title="Create your account"
      description="Enter your credentials to continue."
      outerText="Already have an account?"
      innerText="Sign in"
      authTypeHandler={authTypeHandler}
    >
      <Input value={email} onChange={setEmailHandler} label="Email" placeholder="Email" />
      <Input
        value={password}
        onChange={setPasswordHandler}
        label="Password"
        placeholder="Password"
        type="password"
      />
      <Input
        value={repeatedPassword}
        onChange={setRepeatedPasswordHandler}
        label="Repeat Password"
        placeholder="Password"
        type="password"
      />
      {isAuthLoading ? <LoadingSpinner /> : <Button onClick={registrationHandler}>Create new account</Button>}
    </Section>
  );
};
