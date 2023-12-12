import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tokenKey } from 'src/app/Data-Models/ContantsFile';


export const routeGuardExampleGuard: CanActivateFn = (route, state) => {  
  const router = inject(Router);

  if(localStorage.getItem(tokenKey)){
    return true;
  }
  else{
    router.navigate(['login']);
    return false;
  }  
};
