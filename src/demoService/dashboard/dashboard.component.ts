import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import type { Task } from '../types.d';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

}




















/*
    this.tasksService.getTasks().subscribe((tasks: Task[]) => {
      console.log(tasks);
    });
    */