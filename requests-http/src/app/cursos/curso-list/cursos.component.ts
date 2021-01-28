import { EMPTY, Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CursosService } from '../../shared/services/cursos.service';
import { Curso } from '../../shared/models/curso';
import { AlertModalService } from '../../shared/services/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  //cursos: Curso[];


  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  bsModalRef: BsModalRef

  constructor(private service: CursosService, private alertService: AlertModalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    )
  }

  handleError() {
    this.alertService.showAlert('Erro ao carregar cursos. Tente novamente mais tarde', 'danger', 10000);
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Error ao carregar cursos. Tente novamente mais tarde'
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo:this.route});
  }

}
