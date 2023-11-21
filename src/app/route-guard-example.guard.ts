import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const routeGuardExampleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  router.navigate(['login']);
  return false;
};
