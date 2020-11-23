export interface Task {
  id: number;
  name: string;
  finish: boolean;
  dtCreate: Date;
}

export interface TaskProps {
  tasks: Task[];
}

export interface PropsMethods {
  task: Task[];
  newTaskCreate(taskCreate: Task): void;
  getTasks(): Task[];
  updateTask(id: number, taskUpdate: Task): void;
  deleteTask(id: number): void;
}
