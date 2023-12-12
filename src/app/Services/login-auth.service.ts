import { Injectable } from '@angular/core';
import { UserLoginDetails } from 'src/app/Data-Models/ContantsFile';
import { loginUserDetails } from 'src/app/Data-Models/UserClasses';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  validateUserDetails(loginData : loginUserDetails): boolean{
    
    var returnval : boolean = false;
   
    UserLoginDetails.forEach(item => {
      if(item.fullName?.toUpperCase() === loginData.fullName?.toUpperCase() &&
         item.email?.toUpperCase() === loginData.email?.toUpperCase()
      ){
        returnval = true;
        return true;
      }
      else{
        return false;
      }
    })

    return returnval;
  }
}
