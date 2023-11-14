import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginUserDetails } from 'src/app/Data-Models/UserClasses';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData : loginUserDetails = new loginUserDetails();

  constructor(){

  }

  loginFn(formsdata : any){
    
  }

}
