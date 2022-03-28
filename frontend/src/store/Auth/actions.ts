import axios from 'axios';
import { Dispatch } from 'redux';

import { API_URL } from '../../constants/api';
import { ControllerNames } from '../../constants/controllerNames';
import { NotificationTypes } from '../../constants/notifications';
import { getErrorByStatusCode } from '../../utils/errorUtils';
import { IAuthResponse } from '../../models/IAuthResponse';
import { IUser } from '../../models/IUser';
import AuthService from '../../services/authService';
import { setNotification, showNotification } from '../Notification/actions';
import { AUTH_ACTIONS } from './constants';
import MailService from '../../services/mailService';

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await AuthService.login(email, password);

      localStorage.setItem('token', response.data.accessToken);

      dispatch(receiveData({ isAuthenticated: true, user: response.data.user }));
      dispatch(requestEnd());
    } catch (e: any) {
      const statusCode = e.response?.status;

      if (statusCode && statusCode == 400) {
        dispatch(setNotification(getErrorByStatusCode(statusCode + '/LOGIN'), NotificationTypes.ERROR));
        dispatch(showNotification());
      }

      dispatch(rejectData());
    }
  };

export const register =
  (email: string, password: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await AuthService.register(email, password);

      localStorage.setItem('token', response.data.accessToken);

      dispatch(receiveData({ isAuthenticated: true, user: response.data.user }));
      dispatch(requestEnd());
    } catch (e: any) {
      const statusCode = e.response?.status;

      if (statusCode && statusCode == 400) {
        dispatch(setNotification(getErrorByStatusCode(statusCode + '/REGISTRATION'), NotificationTypes.ERROR));
        dispatch(showNotification());
      }

      dispatch(rejectData());
    }
  };

export const logout =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());
      dispatch(checkToken());

      const response = await AuthService.logout();

      localStorage.removeItem('token');

      dispatch(receiveData({ isAuthenticated: false, user: {} as IUser }));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const checkAuth =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());
      dispatch(checkToken());

      const response = await axios.get<IAuthResponse>(`${API_URL}${ControllerNames.TOKENS}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem('token', response.data.accessToken);

      dispatch(receiveData({ isAuthenticated: true, user: response.data.user }));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const verify =
  (user: IUser) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await AuthService.verify(user);

      localStorage.setItem('token', response.data.accessToken);

      dispatch(receiveData({ isAuthenticated: true, user: response.data.user }));
      dispatch(requestEnd());
    } catch (e: any) {
      const statusCode = e.response?.status;

      if (statusCode && statusCode == 400) {
        dispatch(setNotification(getErrorByStatusCode(statusCode + '/VERIFY'), NotificationTypes.ERROR));
        dispatch(showNotification());
      }

      dispatch(rejectData());
    }
  };

export const sendActivationLink =
  (email: string, activationLink: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await MailService.sendActivationLink(email, activationLink);

      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

const requestData = () => ({
  type: AUTH_ACTIONS.REQUEST_DATA,
});

const receiveData = (payload: any) => ({
  type: AUTH_ACTIONS.RECEIVE_DATA,
  payload: payload,
});

const rejectData = () => ({
  type: AUTH_ACTIONS.REJECT_DATA,
});

const requestEnd = () => ({
  type: AUTH_ACTIONS.REQUEST_END,
});

const checkToken = () => ({
  type: AUTH_ACTIONS.CHECK_TOKEN,
});

export default {
  login,
  register,
  logout,
  checkAuth,
  verify,
  sendActivationLink,
};
