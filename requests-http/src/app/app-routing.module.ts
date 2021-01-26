import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'busca-reativa'
  },
  {
    path: 'rxjs-poc',
    loadChildren: () => import('../app/unsubscribe-rxjs/module-rxjs.module').then(m => m.ModuleRxjsModule)
  },
  {
    path: 'cursos',
    component: CursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
