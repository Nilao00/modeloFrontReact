import { store } from "../../../../../Store";
import { types } from "../../../../../Store/Types/tasks";

import { Task } from "../../../../../Interfaces/Task";


export function* saveNewTask(payload: Task) {
  return yield store.dispatch({ type: types.setTasks, payload });
}

export function* updateTask(payload: Task) {
  return yield store.dispatch({ type: types.updateTask, payload });
}

export function* deleteTask() {
  return yield store.dispatch({ type: types.setTasks, payload: 1 });
}
