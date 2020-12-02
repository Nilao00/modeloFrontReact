import { UsersType, types } from "../Types/users";
import { Users, UserStateObject } from "../../Interfaces/Users";

const INITIAL_STATE: UserStateObject = {
  users: {
    byId: {},
  },
  allId: [],
};

function ActionsUser(state = INITIAL_STATE, action: UsersType) {
  switch (action.type) {
    case types.getOneUser:
      return {
        users: {
          ...state.users,
          byId: { ["action.payload"]: action.payload },
          allId: [...state.allId, action.payload],
        },
      };
    case types.getUsersSeach:
      return {
        users: {
          ...state.users,
          byId: { ["action.payload"]: action.payload },
          allId: [...state.allId, action.payload],
        },
      };
    default:
      return state;
  }
}
export default ActionsUser;
