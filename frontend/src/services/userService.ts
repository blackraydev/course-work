import { AxiosResponse } from 'axios';
import { IUser } from '../models/IUser';
import api from '../api';

export default class UserService {
  static async getUsers(id: string, query?: string): Promise<AxiosResponse<IUser[]>> {
    return api.post<IUser[]>('/users', { id, query });
  }
}
