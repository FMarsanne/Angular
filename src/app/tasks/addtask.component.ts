import { Component, OnInit } from '@angular/core';
import { ITaskObject, IUserObject, TaskStatus,TaskForm} from '../myTypes.d';
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
  startdate: Date | null = null;
  enddate: Date | null = null;
  statusEnum: TaskStatus = TaskStatus.OPEN;

  
  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    console.log(this.title, this.description, this.statusEnum);
    const task: TaskForm = {
      title: this.title, 
      startdate: this.startdate,
      enddate: this.enddate,
      description: this.description,
      statusEnum: this.statusEnum
    };

    this.tasksService.addTask(task);
    this.router.navigate(['/listtasks']);
    
  }
 }

