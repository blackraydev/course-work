import React from 'react';

import * as UI from './Input.styles';

interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder: string;
  type?: string;
  withoutMargin?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  type = 'text',
  withoutMargin,
}) => {
  return (
    <UI.InputHolder withoutMargin={withoutMargin}>
      {label && <UI.Label>{label}</UI.Label>}
      <UI.Input value={value} onChange={onChange} placeholder={placeholder} type={type} />
    </UI.InputHolder>
  );
};
