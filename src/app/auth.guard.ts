import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const router: Router = inject(Router);
    const auth: AuthService = inject(AuthService);

    if(!auth.estaAutenticado()) {
      router.navigate(["login"]);
      return false;
    }
    return true;
  }

 


/*
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn  = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
}
*/
/*
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  }  

  authGuard: CanActivateFn  = (route, state) => {
    if(!this.auth.estaAutenticado()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
 }
}*/

/*
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.estaAutenticado()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
*/