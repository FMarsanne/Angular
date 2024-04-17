export type Timeout = ReturnType<typeof setInterval>;

export type IItemObject = {
    id: number;
    name: string;
  }

  export const enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
  }

  export type TaskForm = {
    title: string,
    description: string | null,
    status: TaskStatus,
  }

  export type ITaskObject = {
    id: number;
    title: string;
    description : string | null;
    status : TaskStatus;
  }

  export type IUserObject = {
    email: string;
    password: string;
  }