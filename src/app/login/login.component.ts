import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IUserObject } from '../myTypes.d';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  message: string = "Vous êtes déconnecté";
  constructor(
    private router : Router,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
  }

  async login() {
    console.log(this.email, this.password);
    console.table( {email: this.email,
      password: this.password,
      message : this.message })

      this.message = "Connexion ...";
      const res = await this.auth.login(this.email, this.password);

      if (typeof res === 'string') {
        this.message = res;
      } else {
        this.message = `Bienvenue ${res.email} !`;
        this.router.navigate(['/listtasks']);   // Navigue directemnt sur la liste des Tasks en conservant le Token
        this.router.navigate(['/home']); 
      }
  }

  async logout() {
    
  //    localStorage.getItem("user");
  //    localStorage.removeItem;

  }
}
