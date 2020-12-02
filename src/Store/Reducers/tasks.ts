import { TasksType, types } from "../Types/tasks";
import { Task, TaskStateObject } from "../../Interfaces/Task";

const INITIAL_STATE: TaskStateObject = {
  tasks: {
    byId: {},
  },
  allId: [],
};

function ActionsTasks(
  state = INITIAL_STATE,
  action: { TasksType: TasksType; Task: Task }
) {
  switch (action.TasksType.type) {
    case types.getTasks:
      return {
        tasks: {
          ...state.tasks,
          byId: { [action.Task.id]: action.TasksType.payload },
          allId: [...state.allId, action.Task.id],
        },
      };
    case types.setTasks:
      return {
        tasks: {
          ...state.tasks,
          byId: { [action.Task.id]: action.TasksType.payload },
          allId: [...state.allId, action.Task.id],
        },
      };
    case types.updateTask:
      return {
        tasks: {
          ...state.tasks,
          byId: {
            [action.Task.id]: {
              ...state.tasks.byId,
              id: action.TasksType.payload,
            },
          },
          allId: [...state.allId, action.Task.id],
        },
      };
    default:
      return state;
  }
}
export default ActionsTasks;
