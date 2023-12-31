import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { InputExampleParentComponent } from './InputOutputExample/input-example-parent/input-example-parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './Login/login/login.component';
import { routeGuardExampleGuard } from './route-guard-example.guard';
import { FormStatesComponent } from './Forms/form-states/form-states.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate : [routeGuardExampleGuard] , component: HomeComponent},
  {path: 'formStates', canActivate : [routeGuardExampleGuard], component: FormStatesComponent},
  {path: 'templateDriven', canActivate : [routeGuardExampleGuard], component: TemplateDrivenComponent},
  {path: 'reactive', canActivate : [routeGuardExampleGuard], component: ReactiveFormsComponent},
  {path: 'inputOutput', canActivate : [routeGuardExampleGuard], component: InputExampleParentComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
