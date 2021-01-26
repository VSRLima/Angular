import { EMPTY, Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CursosService } from '../shared/services/cursos.service';
import { Curso } from '../shared/models/curso';
import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';


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

  constructor(private service: CursosService, private modalService: BsModalService) { }

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
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Error ao carregar cursos. Tente novamente mais tarde'
  }

}
