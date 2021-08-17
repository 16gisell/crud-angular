import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from './componentes/layout/layout.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthComponent } from './componentes/auth/auth.component';
import { AuthModule } from './componentes/auth/auth.module';

//services
import { AuthService } from './service/auth.service';
import { FileService } from './service/file-service.service';
import { FileComponent } from './componentes/file/file.component';
import { FileEditComponent } from './componentes/file-edit/file-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AuthComponent,
    FileComponent,
    FileEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
