import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {

constructor(private authService: AuthService) {}
logout(): void {
    this.authService.logout(); // Appelez la méthode logout() du service AuthService
  }
  
}