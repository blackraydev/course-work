import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

export const Layout = styled.div`
  width: 100%;
  padding: 50px 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
  background: ${COLORS.BACKGROUND};
  animation: 0.75s propagation ease;

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
