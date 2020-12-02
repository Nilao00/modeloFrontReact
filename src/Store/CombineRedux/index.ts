import { combineReducers } from "redux";

import { ActionsTasks } from "../Reducers/tasks";

const rootReducer = combineReducers({
  task: ActionsTasks,
});

export default rootReducer;
