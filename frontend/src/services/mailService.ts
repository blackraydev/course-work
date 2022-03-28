import { AxiosResponse } from 'axios';
import api from '../api';

export default class MailService {
  static async sendActivationLink(email: string, activationLink: string): Promise<AxiosResponse> {
    return api.post('/sendActivationLink', { email, activationLink });
  }
}
