export interface Task {
  id: Number;
  name: String;
  finish: boolean;
  dtCreate: Date;
}

export interface TaskProps {
  tasks: Task[];
}

export interface PropsMethods {
  newTaskCreate(taskCreate: Task): Task;
  getTaskById(id: Number): Task;
  updateTask(id: Number, taskUpdate: Task): Task;
  deleteTask(id: Number): Task;
}
