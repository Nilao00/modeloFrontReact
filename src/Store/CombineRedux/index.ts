import { combineReducers } from "redux";

import ActionsTasks from "../Reducers/tasks";
import ActionsUser from "../Reducers/users";


const rootReducer =  combineReducers({
  ActionsTasks,
  ActionsUser,
});

export default rootReducer;
