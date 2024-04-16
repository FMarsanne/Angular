import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskNames : string[] = ['Fred', 'Marsanne'];

  constructor() { }

  getTitles() : string[] {
    return this.taskNames;
  }

  setTitles( taskname : string) : void {
    this.taskNames = [...this.taskNames, taskname];
  }

  doAction() : void {
    console.log("Action done.");
  } 
}
