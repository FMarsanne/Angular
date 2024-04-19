export type Timeout = ReturnType<typeof setInterval>;

export type IItemObject = {
    id: number;
    name: string;
  }

export const enum TaskStatus {
//  OPEN = 'TODO',
  OPEN = 'OPEN',  
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type TaskForm = {
  title: string,
  description: string | null,
  startdate: Date | null,
  enddate: Date | null,
  statusEnum: TaskStatus
}

export type ITaskObject = {
  id: number;
} & TaskForm;

export type IUserObject = {
  sub: string, // Id user
  email: string; 
  exp: number, // expiration date
  iat: number  // iassued at (creation date)
}