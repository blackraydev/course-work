import React from 'react';

import * as UI from './PublicLayout.styles';

export const PublicLayout: React.FC = ({ children }) => {
  return <UI.Layout>{children}</UI.Layout>;
};
