import { Task } from "./../../../../../Interfaces/Task";

import { store } from "../../../../../Store";
import { types } from "../../../../../Store/Types/tasks";

export function deleteTask(payload: number) {
  store.dispatch({
    type: types.deleteTask,
    payload,
  });
}

export function listTasks() {
  const objectTasks = store.getState().ActionsTasks.tasks;
  const reselect = Object.values(objectTasks.byId) as Task[];
  return reselect;
}
