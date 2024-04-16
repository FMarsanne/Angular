import { Component, OnInit } from '@angular/core';
import { ITaskObject, TaskStatus } from '../myTypes.d';

@Component({
  selector: 'app-firstpage',

  templateUrl: "./firstpage.component.html",
  styles: [
  ]
})
export class FirstpageComponent implements OnInit {

  constructor() { }

  TaskObject : ITaskObject[] = [
    { id: 1, taskName: 'Task 1', taskPriority : 1, startDate : new Date(), endDate : new Date(), status : TaskStatus.TODO },
    { id: 2, taskName: 'Task 2', taskPriority : 2, startDate : new Date(), endDate : new Date(), status : TaskStatus.TODO },
    { id: 3, taskName: 'Task 3', taskPriority : 3, startDate : new Date(), endDate : new Date(), status : TaskStatus.TODO }
  ];

  ngOnInit(): void {
  }

}
