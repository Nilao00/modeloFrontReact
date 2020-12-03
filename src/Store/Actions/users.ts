import { UsersType, types } from "../Types/users";

export function searchUser(payload: string): UsersType {
  return {
    type: types.getUsersSeach,
    payload,
  };
}

export function getOneUser(payload: string): UsersType {
  return {
    type: types.getOneUser,
    payload,
  };
}

export function showErrorUser(payload: string): UsersType {
  return {
    type: types.messageErrorUser,
    payload,
  };
}
