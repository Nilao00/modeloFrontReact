interface Description {
  description: string;
}
export interface Task {
  id: number;
  name: string;
  finish: boolean;
  dtCreate: Date;
  waytask: Description[];
}

export interface TaskState {
  tasks: Task[];
}
export interface TaskStateObject {
  tasks: {
    byId: {
      [id: number]: Task;
    };
    allId: number[];
  };
}
