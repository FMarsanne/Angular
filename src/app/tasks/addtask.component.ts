import { Component, OnInit } from '@angular/core';
import { ITaskObject, IUserObject, TaskStatus,TaskForm } from '../myTypes.d';
import { Router } from '@angular/router'
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: "./addtask.component.html",
  styles: [
  ]
})
export class AddtaskComponent implements OnInit {

  title: string = "";
  description: string | null = "";
  status: TaskStatus = TaskStatus.OPEN;

  
  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    console.log(this.title, this.description, this.status);
    const task: TaskForm = {
      title: this.title, 
      description: this.description,
      status: this.status
    };

    this.tasksService.addTask(task);
    this.router.navigate(['/listtasks']);
    
  }
 }

