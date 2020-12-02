import { TasksType, types } from "../Types/tasks";
import { Task, TaskStateObject } from "../../Interfaces/Task";

const INITIAL_STATE: TaskStateObject = {
  tasks: {
    id: {
      name: [],
    },
  },
};

function ActionsTasks(state = INITIAL_STATE, action: TasksType) {
  switch (action.type) {
    case types.getTasks:
      return {
        tasks: [...state.tasks.id.name, action.payload],
      };
    case types.setTasks:
      return {
        tasks: [...state.tasks.id.name, action.payload],
      };
    case types.updateTask:
      return {
        tasks: [...state.tasks.id.name, action.payload],
      };
    case types.updateTask:
      return {
        tasks: [...state.tasks.id.name, action.payload],
      };
    default:
      return state;
  }
}
export default ActionsTasks;
