import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,   CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface OnComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean | UrlTree;
}

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<OnComponentDeactivate> {

    constructor() {}

    canDeactivate ( component: OnComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        return component.canDeactivate();
    }
}; 

