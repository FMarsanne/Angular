import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component : HomeComponent},
  {path: "login", component : LoginComponent},
  {path: "register", component : RegisterComponent},
  {path: "about", component : AboutComponent},
  {path: "about/:id", component : AboutComponent},
  {path: "addtask", component : AddtaskComponent},
  {path: "listtasks", component : ListtasksComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
