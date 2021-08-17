import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from '../app/componentes/auth/login/login.component';
import {RegisterComponent} from './componentes/auth/register/register.component';
import {HomeComponent} from '../app/componentes/home/home.component';
import {FileComponent} from './componentes/file/file.component';
import {FileEditComponent} from './componentes/file-edit/file-edit.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home',component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'newFile', component: FileComponent, canActivate: [AuthGuard]},
  {path: 'editFile/:id', component: FileEditComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
