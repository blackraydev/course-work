import React from 'react';

import * as UI from './Star.styles';

interface IStarProps {
  rate: number;
  fill?: boolean;
}

export const Star: React.FC<IStarProps> = ({ rate, fill }) => {
  const handleStarClick = () => {};

  return (
    <UI.StarWrapper onClick={handleStarClick}>
      <UI.Svg>
        {fill ? (
          <UI.Path d="M11.063 3.505c.324-.866 1.55-.866 1.874 0l1.794 4.798a1 1 0 00.893.648l5.117.224c.924.04 1.303 1.206.579 1.782l-4.009 3.188a1 1 0 00-.34 1.05l1.368 4.936c.247.891-.744 1.612-1.516 1.101l-4.271-2.827a1 1 0 00-1.104 0l-4.271 2.827c-.772.51-1.763-.21-1.516-1.1l1.369-4.937a1 1 0 00-.341-1.05L2.68 10.957c-.724-.576-.345-1.742.58-1.782l5.116-.224a1 1 0 00.893-.648l1.794-4.798z" />
        ) : (
          <UI.Path
            d="M10.162 3.195c.635-1.728 3.04-1.728 3.676 0l1.76 4.786 5.022.223c1.813.08 2.556 2.406 1.136 3.554l-3.933 3.181 1.343 4.924c.485 1.778-1.461 3.215-2.975 2.197L12 19.24l-4.191 2.82c-1.514 1.018-3.46-.42-2.975-2.197l1.343-4.924-3.933-3.18c-1.42-1.15-.677-3.474 1.136-3.555l5.021-.223 1.76-4.786zM13.76 8.68L12 3.894 10.24 8.68a1.966 1.966 0 01-1.753 1.294l-5.021.223 3.933 3.18c.616.5.88 1.324.67 2.095l-1.343 4.924 4.19-2.82a1.936 1.936 0 012.167 0l4.191 2.82-1.343-4.924a2.014 2.014 0 01.67-2.094l3.933-3.18-5.021-.224A1.966 1.966 0 0113.76 8.68z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        )}
      </UI.Svg>
    </UI.StarWrapper>
  );
};