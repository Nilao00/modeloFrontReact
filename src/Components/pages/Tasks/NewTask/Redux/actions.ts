import { store } from "../../../../../Store";
import { types } from "../../../../../Store/Types/tasks";

import { Task } from "../../../../../Interfaces/Task";

export default function saveNewTask(payload: Task) {
  return store.dispatch({
    type: types.setTasks,
    payload
  });
}
