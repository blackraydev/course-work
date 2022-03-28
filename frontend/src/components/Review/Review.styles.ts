import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.SECONDARY};
  padding: 35px;
  border-radius: 25px;
  max-width: 700px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const HeaderLeftPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background: ${COLORS.PINK};
  border-radius: 50%;
`;

export const UserPhoto = styled.img``;

export const PhotoPlaceholder = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${COLORS.WHITE};
`;

export const HeaderRightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  gap: 10px;
`;

export const HeaderRightUpperPart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${COLORS.WHITE};
`;

export const CreateDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.PARAGRAPH};
  margin-left: 25px;
`;

export const HeaderRightBottomPart = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AdvantageWrapper = styled.div`
  display: flex;
  width: 100%:
`;

export const AdvantageLeftPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;

export const AdvantageRightPart = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 25px;
  padding-right: 0;
`;

export const AdvantageText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${COLORS.WHITE};
`;

export const DisadvantageWrapper = styled.div`
  display: flex;
  width: 100%:
`;

export const DisadvantageLeftPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;

export const DisadvantageRightPart = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 25px;
  padding-right: 0;
`;

export const DisadvantageText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${COLORS.WHITE};
`;

export const CommentWrapper = styled.div`
  display: flex;
  width: 100%:
`;

export const CommentLeftPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;

export const CommentRightPart = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 25px;
  padding-right: 0;
`;

export const CommentText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${COLORS.WHITE};
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  transform: scale(1.25);
`;

export const Path = styled.path``;
