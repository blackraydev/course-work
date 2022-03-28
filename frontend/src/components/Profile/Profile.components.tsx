import React from 'react';
import { IUser } from '../../models/IUser';
import { getShortName } from '../../utils/nameUtils';

import * as UI from './Profile.styles';

interface IProfileProps {
  user: IUser;
}

export const Profile: React.FC<IProfileProps> = ({ user }) => {
  const userHasPhoto = false;

  return (
    <UI.ProfileWrapper>
      <UI.UserPhotoWrapper>
        {userHasPhoto ? <UI.UserPhoto /> : <UI.PhotoPlaceholder>{getShortName(user.name)}</UI.PhotoPlaceholder>}
      </UI.UserPhotoWrapper>
      <UI.UserName>{user.name}</UI.UserName>
      <UI.UserEmail>{user.email}</UI.UserEmail>
    </UI.ProfileWrapper>
  );
};
