import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent},
    {path: 'alunos/:id', component: AlunoDetalheComponent},
    {path: 'alunos/:id/editar', component: AlunosFormsComponent},
    {path: 'alunos/novo', component: AlunosFormsComponent}
];

@NgModule ({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}