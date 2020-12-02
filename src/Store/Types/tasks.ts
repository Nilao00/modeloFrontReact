import { Task } from "../../Interfaces/Task";

export const types = {
  getTasks: "GET_ALL_TASKS",
  setTasks: "SET_NEW_TASK",
  updateTask: "UPDATE_TASK",
  deleteTask: "DELETE_TASK",
  task: "GET_ELEMENT_TASK",
};

interface getAllTasksInterface {
  type: typeof types.getTasks;
  payload: Task[];
}

interface setNewTaskInterface {
  type: typeof types.setTasks;
  payload: { [id: number]: Task };
}

interface updateNewTaskInterface {
  type: typeof types.updateTask;
  payload: { [id: number]: Task };
}

interface deleteNewTaskInterface {
  type: typeof types.updateTask;
  payload: number;
}

export type TasksType =
  | getAllTasksInterface
  | setNewTaskInterface
  | updateNewTaskInterface
  | deleteNewTaskInterface;
