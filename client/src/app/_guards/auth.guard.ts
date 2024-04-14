import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   if(localStorage.getItem('user')){
//     return true;
//   }
//   return false;
// };


export const authGuard: CanActivateFn = (route, state ) => {
  const router: Router = Inject(Router);
  if(localStorage.getItem('user')){
    return true;
  }
  return false;
};
