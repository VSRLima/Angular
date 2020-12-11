import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosGuard } from './guards/cursos.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard.service';
import { AlunosGuard } from './guards/alunos.guard';

const routes: Routes = [
    { path: 'cursos', canActivate: [AuthGuard], canActivateChild: [CursosGuard], loadChildren: () => import('./cursos/cursos-m.module').then(m => m.CursosMModule), canLoad: [AuthGuard] },
    { path: 'alunos', canActivate: [AuthGuard], canActivateChild: [AlunosGuard] ,loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule), canLoad: [AuthGuard] },
    { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
