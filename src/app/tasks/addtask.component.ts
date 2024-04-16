import { Component, OnInit } from '@angular/core';
import { ITaskObject, IUserObject, TaskStatus } from '../myTypes.d';
import { Router } from '@angular/router'
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: "./addtask.component.html",
  styles: [
  ]
})
export class AddtaskComponent implements OnInit {

  submitted = false;

  taskName !: string;
  startDate !: Date;
  endDate !: Date;
  taskPriority !: number;

  
  constructor(
    private router : Router,
    private taskService : TasksService
  ) { }

  TaskObject : ITaskObject[] = [
    { id: 1, taskName: 'Task 1', taskPriority : 1, startDate : new Date(), endDate : new Date(), status : TaskStatus.TODO },
    { id: 2, taskName: 'Task 2', taskPriority : 2, startDate : new Date(), endDate : new Date(), status : TaskStatus.DOING },
    { id: 3, taskName: 'Task 3', taskPriority : 3, startDate : new Date(), endDate : new Date(), status : TaskStatus.DONE }
  ];

  UserObject : IUserObject[] = [
    {id : 1, userName: 'Fred', userPwd: 'pwd'},
    {id : 2, userName: 'Mike', userPwd: 'pwd'}
  ]
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.submitted = true; 
    console.log('Submitted!');
    console.log('Task Name:', this.taskName);
    console.log('Start Date Task :', this.startDate);
    console.log('End Date Task :', this.endDate);
    console.log('Task Priority:', this.taskPriority);

    this.taskService.setTitles(this.taskName);
    this.router.navigate(['/listtasks']);
    
  }
 }

