import { UsersType, types } from "../Types/users";
import { Users, UserStateObject } from "../../Interfaces/Users";

const INITIAL_STATE: UserStateObject = {
  users: {
    id: {
      name: [],
    },
  },
};

function ActionsUser(state = INITIAL_STATE, action: UsersType) {
  switch (action.type) {
    case types.getOneUser:
      return {
        users: [...state.users.id.name, action.payload],
      };
    case types.getUsersSeach:
      return {
        users: [...state.users.id.name, action.payload],
      };
    default:
      return state;
  }
}
export default ActionsUser;
