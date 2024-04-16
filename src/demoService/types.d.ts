export const enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export type User = {
  id: number,
  email: string,
  password: string | null
}

export type TaskForm = {
  title: string,
  description: string | null,
  status: TaskStatus,
}

export type Task = {
  id: number,
  //userId: number,
} & TaskForm;

