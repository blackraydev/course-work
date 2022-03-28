import { Dispatch } from 'redux';
import { IUser } from '../../models/IUser';
import UserService from '../../services/userService';
import { USERS_ACTIONS } from './constants';

export const getUsers =
  (id: string, query?: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await UserService.getUsers(id, query);
      const users: IUser[] = response.data;

      dispatch(receiveData({ users }));
      dispatch(requestEnd());
    } catch (e: any) {
      console.log(e);
      dispatch(rejectData());
    }
  };

const requestData = () => ({
  type: USERS_ACTIONS.REQUEST_DATA,
});

const receiveData = (payload: any) => ({
  type: USERS_ACTIONS.RECEIVE_DATA,
  payload: payload,
});

const rejectData = () => ({
  type: USERS_ACTIONS.REJECT_DATA,
});

const requestEnd = () => ({
  type: USERS_ACTIONS.REQUEST_END,
});

export default {
  getUsers,
};
