import { TasksType, types } from "../Types/tasks";
import { Task } from "../../Interfaces/Task";

export function getAllTask(): TasksType {
  return {
    type: types.getTasks,
    payload: [],
  };
}

export function setNewTask(payload: Task): TasksType {
  return {
    type: types.getTasks,
    payload:payload,
  };
}

export function updateTask(payload: Task[]): TasksType {
  return {
    type: types.getTasks,
    payload,
  };
}

export function deleteTask(): TasksType {
  return {
    type: types.getTasks,
    payload: 0 || 1,
  };
}

