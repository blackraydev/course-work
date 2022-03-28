import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.SECONDARY};
  padding: 75px;
  border-radius: 25px;
  max-height: 450px;
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: ${COLORS.PINK};
  border-radius: 50%;
  margin-bottom: 50px;
`;

export const UserPhoto = styled.img``;

export const PhotoPlaceholder = styled.p`
  font-size: 54px;
  font-weight: 600;
  color: ${COLORS.WHITE};
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${COLORS.WHITE};
  margin-bottom: 15px;
`;

export const UserEmail = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.PARAGRAPH};
`;
