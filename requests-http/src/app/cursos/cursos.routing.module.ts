import { CursoResolverGuard } from './curso-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './curso-list/cursos.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
  { path: '', component: CursosComponent},
  {
    path: 'novo',
    component: FormComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: FormComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
