import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginUserDetails } from 'src/app/Data-Models/UserClasses';
import { LoginAuthService } from 'src/app/Services/login-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData : loginUserDetails = new loginUserDetails();
  isLoginValidated : boolean = false;

  constructor(private loginAuth : LoginAuthService, private tokenCreation : LoginAuthService){
  }

  loginFn(formsdata : any){
    this.isLoginValidated = this.loginAuth.validateUserDetails(this.loginData);
    if(this.isLoginValidated){

    }
  }

}
