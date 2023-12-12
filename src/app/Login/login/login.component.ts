import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginUserDetails } from 'src/app/Data-Models/UserClasses';
import { LoginAuthService } from 'src/app/Services/login-auth.service';
import { TokenService } from 'src/app/Services/token.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData : loginUserDetails = {
    fullName : "",
    email : ""
  }
  
  isLoginValidated : boolean = false;

  constructor(private loginAuth : LoginAuthService, 
              private tokenCreation : TokenService, 
              private router: Router
             )
  {
  }

  loginFn(formsdata : any){
    this.isLoginValidated = this.loginAuth.validateUserDetails(this.loginData);
    if(this.isLoginValidated){
      this.tokenCreation.saveToken();
      this.router.navigate(['home']);
    }
  }

}
