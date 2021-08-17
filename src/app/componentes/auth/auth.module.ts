import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogautComponent } from './logaut/logaut.component';
import { ProfileComponent } from './profile/profile.component';

import {MaterialModule} from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogautComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
