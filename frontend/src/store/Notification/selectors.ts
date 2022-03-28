import { IReduxState } from "..";

export const notificationContentSelector = (state: IReduxState) => state.notificationReducer.notification;
export const notificationShowSelector = (state: IReduxState) => state.notificationReducer.toShow;