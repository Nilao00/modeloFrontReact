import { UsersType, types } from "../Types/users";
import { Users, UserStateObject } from "../../Interfaces/Users";

const INITIAL_STATE: UserStateObject = {
  users: {
    byId: {},
  },
  allId: [],
};

function ActionsUser(
  state = INITIAL_STATE,
  action: { UsersType: UsersType; Users: Users }
) {
  switch (action.UsersType.type) {
    case types.getOneUser:
      return {
        users: {
          ...state.users,
          byId: { [action.Users.id]: action.UsersType.payload },
          allId: [...state.allId, action.Users.id],
        },
      };
    case types.getUsersSeach:
      return {
        users: {
          ...state.users,
          byId: { [action.Users.id]: action.UsersType.payload },
          allId: [...state.allId, action.Users.id],
        },
      };
    default:
      return state;
  }
}
export default ActionsUser;
