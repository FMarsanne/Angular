import { Injectable } from '@angular/core';
import {Task, TaskForm, TaskStatus} from './types.d';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];

  constructor(
  ) { }

  getTasks(): Task[] {
    return this.tasks;
  }
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: TaskForm) : void {
    const newTask: Task = {
      id: this.tasks.reduce((max, task) => task.id > max ? task.id : max, 0) + 1,//TODO récupérer l'id depuis l'api
      title: task.title,
      description: task.description,
      status: task.status,
    }

    this.tasks = [...this.tasks, newTask];
  }
}
