import { number } from "prop-types";
import { TasksType, types } from "../Types/tasks";
import { Task, TaskStateObject } from "../../Interfaces/Task";

const INITIAL_STATE: TaskStateObject = {
  tasks: {
    byId: {},
  },
  allId: [],
};

function ActionsTasks(state = INITIAL_STATE, action: TasksType) {
  console.log(state);
  switch (action.type) {
    case types.getTasks:
      return {
        tasks: {
          ...state.tasks,
          byId: { ["action.payload"]: action.payload },
          allId: [...state.allId, action.payload],
        },
      };
    case types.setTasks:
      return {
        tasks: {
          ...state.tasks,
          byId: { ...state.tasks.byId, byId: action.payload },
          allId: [...state.allId, action.payload],
        },
      };
    case types.updateTask:
      return {
        tasks: {
          ...state.tasks,
          byId: {
            ...state.tasks.byId,
            byId: {
              ...state.tasks.byId,
              id: action.payload,
            },
          },
          allId: [...state.allId, action.payload],
        },
      };
    default:
      return state;
  }
}
export default ActionsTasks;
