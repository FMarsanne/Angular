import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IUserObject } from '../myTypes.d';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    console.log(this.email, this.password);
  }
}
