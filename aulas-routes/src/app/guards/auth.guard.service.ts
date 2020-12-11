import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se o usuário pode carregar o cód do módulo')
    return this.verificarAcesso();
  }
}
