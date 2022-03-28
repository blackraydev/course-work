import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

interface ISpinnerStyleProps {
  fullScreen?: boolean;
}

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  width: 55px;
  height: 55px;
  border: 3px solid ${COLORS.BACKGROUND};
  border-top-color: ${COLORS.PINK};
  border-radius: 50%;
  animation: loading 1s infinite ease;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerHolder = styled.div<ISpinnerStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 35px;

  ${({ fullScreen }: ISpinnerStyleProps) =>
    fullScreen &&
    css`
      background: ${COLORS.BACKGROUND};
      height: 100vh;
      margin: 0;

      ${Spinner} {
        width: 100px;
        height: 100px;
      }
    `}
`;
