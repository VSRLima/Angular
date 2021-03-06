import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('../app/upload-file/upload-file.module').then(m => m.UploadFileModule)
  },
  {
    path: 'busca-reativa',
    loadChildren: () => import('../app/reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
