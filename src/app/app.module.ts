import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { ParentRouterOutletComponent } from './parent-router-outlet/parent-router-outlet.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { InputExampleParentComponent } from './InputOutputExample/input-example-parent/input-example-parent.component';
import { InputExampleChildComponent } from './InputOutputExample/input-example-child/input-example-child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormStatesComponent } from './Forms/form-states/form-states.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ParentRouterOutletComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    InputExampleParentComponent,
    InputExampleChildComponent,
    PageNotFoundComponent,
    FormStatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
