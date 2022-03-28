import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const VerifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

export const Title = styled.p`
  color: ${COLORS.WHITE};
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  color: ${COLORS.PARAGRAPH};
  width: 100%;
  font-weight: 300;
  line-height: 25px;
`;

export const HighlightedText = styled.span`
  color: ${COLORS.WHITE};
  width: 100%;
  font-weight: 400;
  line-height: 25px;
`;
