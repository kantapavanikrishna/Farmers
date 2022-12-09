import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ViewFarmersComponent } from './view-farmers/view-farmers.component';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    UpdateComponent,
    ListComponent,
    ContactComponent,
    ViewFarmersComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
