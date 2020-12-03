import { Users } from './../../Interfaces/Users';

export const types = {
  getUsersSeach: "GET_SEARCH_USERS",
  getOneUser: "GET_ONE_USER",
  messageErrorUser: "SHOW_ERROR_USER",
};

interface getSearchUsersInterface {
  type: typeof types.getUsersSeach;
  payload: Users[];
}

interface getOneUserInterface {
  type: typeof types.getOneUser;
  payload: Users;
}

interface showErrorUserInterface {
  type: typeof types.messageErrorUser;
  payload: string;
}

export type UsersType =
  | getSearchUsersInterface
  | getOneUserInterface
  | showErrorUserInterface;
