export type Timeout = ReturnType<typeof setInterval>;

export type IItemObject = {
    id: number;
    name: string;
  }

  export const enum TaskStatus {
    TODO,
    DOING,
    DONE
  }
// 
  export type ITaskObject = {
    id: number;
    taskName: string;
    startDate : Date;
    endDate : Date;
    taskPriority : number;
    status : TaskStatus;
  }

  export type IUserObject = {
    id: number;
    userName: string;
    userPwd: string;
  }