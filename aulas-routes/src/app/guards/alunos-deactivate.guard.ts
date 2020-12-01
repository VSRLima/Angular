import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot,   CanDeactivate, , RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormsComponent } from '../alunos/alunos-forms/alunos-forms.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormsComponent> {

    canDeactivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, component: AlunosFormsComponent ): Observable<boolean> | boolean {
        console.log(route);
        console.log(state);
        return true;
    }
}