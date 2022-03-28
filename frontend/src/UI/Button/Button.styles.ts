import styled, { css, CSSObject } from 'styled-components';

import { COLORS } from '../../constants/colors';

interface IButtonStyleProps {
  styles?: CSSObject;
}

export const Button = styled.button<IButtonStyleProps>`
  transition: 0.25s;
  background: ${COLORS.LIGHT_GRAY};
  padding: 15px;
  font-size: 18px;
  color: ${COLORS.WHITE};
  width: 100%;
  height: 55px;
  border-radius: 15px;
  margin-top: 35px;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background: ${COLORS.PINK_HOVER};
  }

  ${({ styles }: IButtonStyleProps) =>
    css`
      ${styles}
    `}
`;
