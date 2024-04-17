import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { ButtonComponent } from './lib/button/button.component';
import { ModalComponent } from './lib/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './MyHttpService';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AddtaskComponent,
    ButtonComponent,
    ModalComponent,
    ListtasksComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SortableModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
