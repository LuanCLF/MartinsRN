import { Router, type CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();

  if (localStorage.getItem('token') == undefined) {
    router.navigateByUrl('/');
  }
  return true;
};
