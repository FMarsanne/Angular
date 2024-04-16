import { Component, OnInit } from '@angular/core';
import { TasksService } from "../tasks/tasks.service";

@Component({
  selector: 'app-listtasks',
  templateUrl: './listtasks.component.html',
  styles: [
  ]
})
export class ListtasksComponent implements OnInit {

  taskName : string[] = [];

  constructor(
    private tasksService : TasksService) { }

  ngOnInit(): void {
    this.taskName = this.tasksService.getTitles();
  }

}
