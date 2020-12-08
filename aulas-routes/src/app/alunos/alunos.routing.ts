import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunosRoutes = [
    {path: '', component: AlunosComponent, children: [
        {path: ':id', component: AlunoDetalheComponent},
        {path: 'editar/:id', component: AlunosFormsComponent, CanDeactivate: [AlunosDeactivateGuard]},
        {path: 'novo', component: AlunosFormsComponent}
    ]}
];

@NgModule ({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}