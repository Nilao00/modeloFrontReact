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

export interface paginateTaks {
  page?: number;
  per_page: number;
  pre_page: number | null;
  next_page: number | null;
  total: number;
  total_pages: number;
  data: Task[];
}
