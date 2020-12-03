import { Task } from "../../Interfaces/Task";

export const types = {
  setTasks: "SET_NEW_TASK",
  updateTask: "UPDATE_TASK",
  deleteTask: "DELETE_TASK",
};

interface setNewTaskInterface {
  type: typeof types.setTasks;
  payload: { [id: number]: Task };
}

interface updateNewTaskInterface {
  type: typeof types.updateTask;
  payload: { [id: number]: Task };
}

interface deleteNewTaskInterface {
  type: typeof types.deleteTask;
  payload: number;
}

export type TasksType =
  | setNewTaskInterface
  | updateNewTaskInterface
  | deleteNewTaskInterface;
