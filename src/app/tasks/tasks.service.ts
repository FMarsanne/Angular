import { Injectable } from '@angular/core';
import { ITaskObject, TaskForm } from '../myTypes.d'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks : ITaskObject[] = [];

  constructor( private http : HttpClient ) { 
     }

  getTasks() : ITaskObject[] {
    return this.tasks;
  }

  getTaskById(id: number): ITaskObject | undefined {
    return this.tasks.find(task => task.id === id);
  }
   
  // Ancienne version avant http 
  /*addTask(task: TaskForm) : void {
    const newTask: ITaskObject = {
      id: this.tasks.reduce((max, task) => task.id > max ? task.id : max, 0) + 1,//TODO récupérer l'id depuis l'api
      title: task.title,
      description: task.description,
      status: task.status,
    }

    this.tasks = [...this.tasks, newTask];
  } */

  // Version avec http
  async addTask(task: TaskForm) {
    const newTask = await this.http.post<ITaskObject>("/tasks", task).toPromise();
    if (! newTask)
      throw new Error("Task not created"); 
    this.tasks = [...this.tasks, newTask];
    console.log(newTask);
  }
}
