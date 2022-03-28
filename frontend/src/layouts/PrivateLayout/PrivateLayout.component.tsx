import React from 'react';

import * as UI from './PrivateLayout.styles';

export const PrivateLayout: React.FC = ({ children }) => {
  return <UI.Layout>{children}</UI.Layout>;
};
