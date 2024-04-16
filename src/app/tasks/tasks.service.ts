import { Injectable } from '@angular/core';
import { ITaskObject, TaskForm } from '../myTypes.d'; 

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks : ITaskObject[] = [];

  constructor() { }

  getTasks() : ITaskObject[] {
    return this.tasks;
  }

  getTaskById(id: number): ITaskObject | undefined {
    return this.tasks.find(task => task.id === id);
  }
   
  addTask(task: TaskForm) : void {
    const newTask: ITaskObject = {
      id: this.tasks.reduce((max, task) => task.id > max ? task.id : max, 0) + 1,//TODO récupérer l'id depuis l'api
      title: task.title,
      description: task.description,
      status: task.status,
    }

    this.tasks = [...this.tasks, newTask];
  }

}
