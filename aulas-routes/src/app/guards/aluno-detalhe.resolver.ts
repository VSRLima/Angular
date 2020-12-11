import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Aluno } from '../alunos/alunos';
import { AlunosService } from './../alunos/alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {

        let id = route.params['id'];
        return this.alunosService.getAlunosById(id);
    }
}