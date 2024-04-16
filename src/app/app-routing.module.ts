import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { ListtasksComponent } from './listtasks/listtasks.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component : HomeComponent},
  {path: "about", component : AboutComponent},
  {path: "about/:id", component : AboutComponent},
  {path: "firstpage", component : FirstpageComponent},
  {path: "addtask", component : AddtaskComponent},
  {path: "listtasks", component : ListtasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
