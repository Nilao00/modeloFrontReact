import { TasksType, types } from "../Types/tasks";
import { Task } from "../../Interfaces/Task";

export function getAllTask(payload: Task[]): TasksType {
  return {
    type: types.getTasks,
    payload,
  };
}

export function setNewTask(payload: Task): TasksType {
  return {
    type: types.getTasks,
    payload: { [payload.id]: payload },
  };
}

export function updateTask(payload: Task): TasksType {
  return {
    type: types.getTasks,
    payload: { [payload.id]: payload },
  };
}

export function deleteTask(payload: number): TasksType {
  return {
    type: types.getTasks,
    payload,
  };
}
