import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUserObject } from './myTypes';
import { Router } from '@angular/router';

type LoginResponse = {
  accessToken : string
} | string;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken : string | null = null;
  user: IUserObject | null = null;
  

  constructor(
    private http: HttpClient,
    private router: Router ) { 
    this.loginFromLocalStorage();
  }

  async login(email: string, password: string) : Promise<IUserObject | string> {
    try {
    console.table({email, password});
    const res = await this.http.post<LoginResponse>("/login", {email, password}).toPromise();
    if (typeof res === 'string' ||! res)
      throw new Error(res);

      const payload = res.accessToken.split(".")[1]; // découpe le token reçu et prend la partie du milieu
      const decoded = atob(payload); // décode le payload (librairie Base64)
      const user = JSON.parse(decoded) as IUserObject; 

      console.log("Decoded : " + decoded); 
      console.log("User : " + user); 

      this.accessToken = res.accessToken;
      this.user = user;  // on conserve le user pour une utilisation ultérieure

      localStorage.setItem("accessToken", this.accessToken);
  //    localStorage.getItem("user");
  //    localStorage.removeItem;

      console.log(res);

      return user;  // Retourne l'utilisateur si tout se passe bien

    } catch (e: any) {
      if (e instanceof HttpErrorResponse) {
        return e.error; // Retourne l'erreur HTTP si c'est le cas
      } else if (e instanceof Error) {
        return "An error occurred: " + e.message; // Retourne l'erreur générique avec le message
      } else {
        return "An unknown error occurred"; // Retourne une erreur inconnue
      }
    }
  }

  async loginFromLocalStorage() {
    
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) return;

    this.accessToken = accessToken;

    
    const payload = accessToken.split(".")[1]; // découpe le token reçu et prend la partie du milieu
    const decoded = atob(payload); // décode le payload (librairie Base64)
    const user = JSON.parse(decoded) as IUserObject; 
    this.user = user;  // on conserve le user pour une utilisation ultérieure
    console.log(user);

  }

  logout() : void {
    
    localStorage.removeItem("accessToken");
    this.accessToken = null;
    this.user = null;
    this.router.navigate(['/login']);

  }
}
