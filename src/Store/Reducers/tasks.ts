import { number } from "prop-types";
import { TasksType, types } from "../Types/tasks";
import { Task, TaskStateObject } from "../../Interfaces/Task";

const INITIAL_STATE: TaskStateObject = {
  tasks: {
    byId: {},
    allId: [],
  },
};

function ActionsTasks(state = INITIAL_STATE, action: TasksType) {
  switch (action.type) {
    case types.setTasks:
      return {
        tasks: {
          ...state.tasks,
          byId: {
            ...state.tasks.byId,
            [action["payload"]["id"]]: action["payload"],
          },
          allId: [...state.tasks.allId, action["payload"]["id"]],
        },
      };
    case types.updateTask:
      return {
        tasks: {
          ...state.tasks,
          byId: {
            ...state.tasks.byId,
            [action["payload"]["id"]]: action["payload"],
          },
          allId: [...state.tasks.allId],
        },
      };
    case types.deleteTask:
      const newState = Object.keys(state.tasks.byId).reduce((r, e) => {
        if (!action.payload[e]) r[e] = state.tasks.byId[e];
        delete r[action.payload.toString()];
        return r;
      }, {});
      return {
        tasks: {
          ...state.tasks,
          byId: newState,
          allId: state.tasks.allId.filter(
            (idFilter) => idFilter !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}
export default ActionsTasks;
