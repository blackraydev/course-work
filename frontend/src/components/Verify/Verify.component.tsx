import React from 'react';
import { useHistory } from 'react-router-dom';

import { PublicRoutes } from '../../constants/routeNames';
import { IUser } from '../../models/IUser';
import { Button } from '../../UI/Button';

import * as UI from './Verify.styles';

interface IVerifyProps {
  logout: () => void;
  sendActivationLink: (email: string, activationLink: string) => void;
  user: IUser;
}

export const Verify: React.FC<IVerifyProps> = ({ logout, sendActivationLink, user }) => {
  const history = useHistory();

  const handleRedirectToAuth = () => {
    logout();
    history.push(PublicRoutes.LOGIN);
  };

  const handleSendActivationLink = () => {
    const { email, activationLink } = user;
    sendActivationLink(email, activationLink);
  };

  return (
    <UI.VerifyWrapper>
      <UI.Title>Verify your profile</UI.Title>
      <UI.Description>
        We just need one small favor from you - please confirm your email to continue using our service.
      </UI.Description>
      <UI.Description>
        We've sent you a confirmation link on <UI.HighlightedText>{user.email}</UI.HighlightedText>.
      </UI.Description>
      <UI.ButtonsWrapper>
        <Button onClick={handleRedirectToAuth}>Back</Button>
        <Button onClick={handleSendActivationLink}>Resend</Button>
      </UI.ButtonsWrapper>
    </UI.VerifyWrapper>
  );
};
