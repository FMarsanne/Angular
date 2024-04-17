import { Injectable } from '@angular/core';
import { ITaskObject, TaskForm } from '../myTypes.d'; 
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks : ITaskObject[] = [];

  constructor( private http : HttpClient ) { 
     }

  // Ancienne version avant http
  /*getTasks() : ITaskObject[] {
    return this.tasks;
  } */

  getTasks() : Observable<ITaskObject[]> {
    console.log("+++++++++++");
    return this.http.get<ITaskObject[]>("/tasks").pipe(tap(res => console.log(res)));
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
