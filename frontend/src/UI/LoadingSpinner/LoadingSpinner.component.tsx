import * as UI from './LoadingSpinner.styles';

interface ILoadingSpinnerProps {
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({ fullScreen }) => {
  return (
    <UI.SpinnerHolder fullScreen={fullScreen}>
      <UI.Spinner />
    </UI.SpinnerHolder>
  );
};
