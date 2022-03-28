import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const ReviewSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 800px;
  border-radius: 25px;
  gap: 25px;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoReviewsText = styled.p`
  margin-top: 25px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${COLORS.PARAGRAPH};
`;
