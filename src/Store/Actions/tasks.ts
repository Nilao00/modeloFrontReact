import { TasksType, types } from "../Types/tasks";
import { Task } from "../../Interfaces/Task";

export function setNewTask(payload: Task): TasksType {
  return {
    type: types.setTasks,
    payload: { [payload.id]: payload },
  };
}

export function updateTask(payload: Task): TasksType {
  return {
    type: types.updateTask,
    payload: { [payload.id]: payload },
  };
}

export function deleteTask(payload: number): TasksType {
  return {
    type: types.deleteTask,
    payload,
  };
}
