import { Component, OnInit } from '@angular/core';
import { TasksService } from "../tasks/tasks.service";
import { ITaskObject, TaskStatus } from '../myTypes.d';

@Component({
  selector: 'app-listtasks',
  templateUrl: './listtasks.component.html',
  styles: [
  ]
})
export class ListtasksComponent implements OnInit {

  tasks: ITaskObject[] = [];
  openTasks: ITaskObject[] = [];
  inprogressTasks: ITaskObject[] = [];
  doneTasks: ITaskObject[] = [];

  constructor(
    private tasksService : TasksService) { }

  ngOnInit(): void {
    // Ancienne version avant http 
    //this.tasks = this.tasksService.getTasks();
    this.tasksService.getTasks().subscribe(res => {
      this.tasks = res;
      console.log("------------");
      console.log(this.tasks);

      this.openTasks = this.tasks.filter(task => task.status === 'OPEN');
      this.inprogressTasks = this.tasks.filter(task => task.status === 'IN_PROGRESS');
      this.doneTasks = this.tasks.filter(task => task.status === 'DONE');
    });
  }

}
