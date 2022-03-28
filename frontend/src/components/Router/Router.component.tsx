import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../../router';
import { authCheckSelector, authTokenLoadingSelector, authUserSelector } from '../../store/Auth/selectors';
import { useActions } from '../../hooks/useActions';
import { LoadingSpinner } from '../../UI/LoadingSpinner';
import { PrivateRoutes, PublicRoutes } from '../../constants/routeNames';
import { VerifyPage } from '../../pages/VerifyPage';
import { reviewsLoadingSelector } from '../../store/Reviews/selectors';

export const Router: React.FC = () => {
  const { checkAuth } = useActions();
  const user = useSelector(authUserSelector);
  const isAuthenticated = useSelector(authCheckSelector);
  const isTokenCheckLoading = useSelector(authTokenLoadingSelector);
  const isUserVerified = user.isVerified;

  useEffect(() => {
    checkAuth();
  }, []);

  if (isTokenCheckLoading) {
    return <LoadingSpinner fullScreen />;
  }

  const renderRoutes = () => {
    if (isAuthenticated && isUserVerified) {
      return privateRoutes.map((route, index) => <Route key={index} {...route} />);
    } else if (!isAuthenticated) {
      return publicRoutes.map((route, index) => <Route key={index} {...route} />);
    }

    return <Route path={PublicRoutes.VERIFY} component={VerifyPage} exact />;
  };

  const renderRedirect = () => {
    if (isAuthenticated && isUserVerified) {
      return <Redirect to={PrivateRoutes.DASHBOARD} />;
    } else if (!isAuthenticated) {
      return <Redirect to={PublicRoutes.LOGIN} />;
    }

    return <Redirect to={PublicRoutes.VERIFY} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes()}
        <Route path="/">{renderRedirect()}</Route>
      </Switch>
    </BrowserRouter>
  );
};
