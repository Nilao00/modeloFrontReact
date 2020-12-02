import { TasksType, types } from "../Types/tasks";
import { TaskState } from "../../Interfaces/Task";

const INITIAL_STATE: TaskState = {
  tasks: [],
};

export function ActionsTasks(state = INITIAL_STATE, action: TasksType) {
  switch (action.type) {
    case types.getTasks:
      return {
        tasks: [...state.tasks],
      };
    case types.setTasks:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case types.updateTask:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case types.updateTask:
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      state;
  }
}
