import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '../constants/api';
import { ControllerNames } from '../constants/controllerNames';
import { IAuthResponse } from '../models/IAuthResponse';

const api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get<IAuthResponse>(`${API_URL}${ControllerNames.TOKENS}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log('Пользователь не авторизован!');
      }
    }

    throw error;
  }
);

export default api;
