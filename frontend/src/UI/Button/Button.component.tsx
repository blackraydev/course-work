import React from 'react';
import { CSSObject } from 'styled-components';

import * as UI from './Button.styles';

interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  styles?: CSSObject;
}

export const Button: React.FC<IButtonProps> = ({ onClick, disabled, styles, children }) => {
  return (
    <UI.Button styles={styles} onClick={onClick} disabled={disabled}>
      {children}
    </UI.Button>
  );
};
