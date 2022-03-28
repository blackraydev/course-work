import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

interface IInputHolderStyleProps {
  withoutMargin?: boolean;
}

export const Input = styled.input`
  transition: 0.25s;
  width: 100%;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
  background: inherit;
  border: 1px solid ${COLORS.GRAY};
  color: ${COLORS.WHITE};

  &:focus {
    border: 1px solid ${COLORS.PINK};
  }

  &::placeholder {
    color: ${COLORS.GRAY};
  }
`;

export const InputHolder = styled.div<IInputHolderStyleProps>`
  width: 100%;

  ${({ withoutMargin }: IInputHolderStyleProps) =>
    !withoutMargin &&
    css`
      margin-bottom: 25px;
    `}

  ${Input} {
    ${({ withoutMargin }: IInputHolderStyleProps) =>
      !withoutMargin &&
      css`
        margin-top: 10px;
      `}
  }
`;

export const Label = styled.p`
  color: ${COLORS.PARAGRAPH};
`;
