import React, { useState, useCallback, useMemo } from 'react';

import { Button } from '../../UI/Button/Button.component';
import { Input } from '../../UI/Input/Input.component';

import * as UI from './AuthSection.styles';

export const AuthSection = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const authDisabled = useMemo(() => !login || !password, [login, password]);

  const handleAuthorize = useCallback(() => {
    console.log('Authorized');
  }, []);

  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin(e.target.value);
    },
    [setLogin]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  return (
    <UI.Section>
      <UI.Title>Авторизация</UI.Title>

      <UI.InputsWrapper>
        <Input value={login} onChange={handleLoginChange} placeholder="Login" />
        <Input value={password} onChange={handlePasswordChange} placeholder="Password" />
      </UI.InputsWrapper>

      <Button onClick={handleAuthorize} disabled={authDisabled}>
        Авторизоваться
      </Button>
    </UI.Section>
  );
};
