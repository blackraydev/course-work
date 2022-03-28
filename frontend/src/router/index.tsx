import { PrivateRoutes, PublicRoutes } from '../constants/routeNames';
import { IRoute } from '../models/IRoute';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';

export const publicRoutes: IRoute[] = [
  { path: PublicRoutes.LOGIN, exact: true, component: LoginPage },
  { path: PublicRoutes.REGISTRATION, exact: true, component: RegistrationPage },
];

export const privateRoutes: IRoute[] = [{ path: PrivateRoutes.DASHBOARD, exact: true, component: DashboardPage }];
