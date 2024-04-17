import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: "./register.component.html",
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  email: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    console.log(this.email);
  }
}
