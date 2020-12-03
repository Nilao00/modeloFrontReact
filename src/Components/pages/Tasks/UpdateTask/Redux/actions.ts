import { store } from "../../../../../Store";
import { types } from "../../../../../Store/Types/tasks";

import { Task } from "../../../../../Interfaces/Task";

export default function updateTask(payload: Task) {
  return store.dispatch({
    type: types.updateTask,
    payload
  });
}
