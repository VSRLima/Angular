import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot,   CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormsComponent } from '../alunos/alunos-forms/alunos-forms.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormsComponent> {
   
    canDeactivate ( component: AlunosFormsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        console.log('guarda de desativação');
        console.log(currentRoute);
        console.log(currentState);
        return true;
    }
} 