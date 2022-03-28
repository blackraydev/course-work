import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.5s propagation ease;

  @keyframes propagation {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 600px;
  padding: 0 100px;
  background: ${COLORS.BACKGROUND};
  border-radius: 35px;
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
  margin-bottom: 35px;
  font-weight: 300;
`;

export const OuterText = styled.p`
  color: ${COLORS.PARAGRAPH};
  margin-top: 25px;
`;

export const InnerText = styled.span`
  transition: 0.25s;
  color: ${COLORS.PINK};
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: ${COLORS.PINK_HOVER};
  }
`;
