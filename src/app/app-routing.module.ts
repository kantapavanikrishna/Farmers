import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { ViewFarmersComponent } from './view-farmers/view-farmers.component';


const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'first',component:FirstComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'contact',component:ContactComponent},
  {path:'view-farmers',component:ViewFarmersComponent},
  {path:'**',component:ErrorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
