import { store } from "../../../../../Store";
import { types } from "../../../../../Store/Types/tasks";

export default function deleteTask(id: number) {
  return store.dispatch({
    type: types.deleteTask,
    payload: id,
  });
}
