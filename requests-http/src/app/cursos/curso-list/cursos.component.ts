import { CursosServiceService } from './../../shared/services/cursos-service.service';
import { EMPTY, Observable, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { catchError, take, switchMap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CursosService } from '../../shared/services/cursos.service';
import { Curso } from '../../shared/models/curso';
import { AlertModalService } from '../../shared/services/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  //cursos: Curso[];

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  bsModalRef: BsModalRef;
  deleteModalRef: BsModalRef;
  cursoSelecionado: Curso;
  @ViewChild('deleteModal') deleteModal;

  constructor(
    private service: CursosServiceService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        //this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );
  }

  handleError() {
    this.alertService.showAlert(
      'Erro ao carregar cursos. Tente novamente mais tarde',
      'danger',
      10000
    );
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Error ao carregar cursos. Tente novamente mais tarde'
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, {
    //   class: 'modal-sm',
    // });
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse curso');
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? EMPTY : this.service.remove(curso.id))
    ).subscribe(
      success => this.alertService.showAlert('Curso deletado com sucesso', 'success', 3000),
      error => this.alertService.showAlert('Erro ao deletar cursos. Por gentileza, tente novamente', 'danger', 5000),
      () => console.log('Request completo')
    )
  }

  onConfirm() {
    this.service.remove(this.cursoSelecionado.id).subscribe(
      success => this.alertService.showAlert('Curso deletado com sucesso', 'success', 3000),
      error => this.alertService.showAlert('Erro ao deletar cursos. Por gentileza, tente novamente', 'danger', 5000),
      () => console.log('request completo')
    );
  }

  onDecline() {
    this.deleteModalRef.hide();
  }
}
