import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 35px;
  height: 35px;
  fill: ${COLORS.STAR_ICON};
`;

export const Path = styled.path`
  fill: ${COLORS.STAR_ICON};
`;
