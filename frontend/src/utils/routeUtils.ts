import FeedIcon from '../components/Icons/FeedIcon';
import FriendsIcon from '../components/Icons/FriendsIcon';
import LogoutIcon from '../components/Icons/LogoutIcon';
import MessagesIcon from '../components/Icons/MessagesIcon';
import ProfileIcon from '../components/Icons/ProfileIcon';
import SettingsIcon from '../components/Icons/SettingsIcon';
import { PrivateRouteNames, PrivateRoutes } from '../constants/routeNames';

export const getIconByRoute = (route: string) => {
  // switch (route) {
  //   case PrivateRoutes.PROFILE:
  //     return ProfileIcon;
  //   case PrivateRoutes.PEOPLE:
  //     return FriendsIcon;
  //   case PrivateRoutes.EVENTS:
  //     return FeedIcon;
  //   case PrivateRoutes.SETTINGS:
  //     return SettingsIcon;
  //   case PrivateRoutes.LOGOUT:
  //     return LogoutIcon;
  // }
};

export const getTitleByRoute = (route: string) => {
  // switch (route) {
  //   case PrivateRoutes.PROFILE:
  //     return PrivateRouteNames.PROFILE;
  //   case PrivateRoutes.PEOPLE:
  //     return PrivateRouteNames.PEOPLE;
  //   case PrivateRoutes.EVENTS:
  //     return PrivateRouteNames.EVENTS;
  //   case PrivateRoutes.SETTINGS:
  //     return PrivateRouteNames.SETTINGS;
  //   case PrivateRoutes.LOGOUT:
  //     return PrivateRouteNames.LOGOUT;
  // }
};
