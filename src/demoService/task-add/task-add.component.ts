import { Component, OnInit } from '@angular/core';
import { TaskStatus, Task, TaskForm } from '../types.d';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  title: string = "";
  description: string | null = "";
  status: TaskStatus = TaskStatus.OPEN;

  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log(this.title, this.description, this.status);
    const task: TaskForm = {
      title: this.title, 
      description: this.description,
      status: this.status
    };

    this.tasksService.addTask(task);
    this.router.navigate(['/dashboard']);
  }

}
