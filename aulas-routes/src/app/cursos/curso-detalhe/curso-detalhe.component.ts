import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute, private cursoService: CursosService, private router: Router) {
    //this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursoService.getCursosById(this.id);
    });
    if (this.curso == null) {
      this.router.navigate(['/naoEncontrado'])
    };
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe()
  }

}
