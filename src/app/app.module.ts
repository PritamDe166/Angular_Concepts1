import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { ParentRouterOutletComponent } from './parent-router-outlet/parent-router-outlet.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ParentRouterOutletComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
