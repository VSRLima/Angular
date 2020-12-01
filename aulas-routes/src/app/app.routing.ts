import { CursosGuard } from './guards/cursos.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard.service';
import { AlunosGuard } from './guards/alunos.guard';

const routes: Routes = [
    { path: 'cursos', canActivate: [AuthGuard], canActivateChild: [CursosGuard], loadChildren: () => import('./cursos/cursos-m.module').then(m => m.CursosMModule) },
    { path: 'alunos', canActivate: [AuthGuard], canActivateChild: [AlunosGuard] ,loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule) },
    { path: '', canActivate: [AuthGuard], component: HomeComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
