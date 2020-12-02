import { UsersType, types } from "../Types/users";
import { UserMethods } from "../../Interfaces/Users";

const INITIAL_STATE: UserMethods = {
  users: [],
};

export default function ActionsUser(state = INITIAL_STATE, action: UsersType) {
  switch (action.type) {
    case types.getOneUser:
      return {
        users: [...state.users, action.payload],
      };
    case types.getUsersSeach:
      return {
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
}
