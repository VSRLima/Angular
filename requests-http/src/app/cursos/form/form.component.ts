import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { CursosService } from 'src/app/shared/services/cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  showMessage = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const curso$ = this.service.loadById(id);
    //     curso$.subscribe(curso => {
    //       this.updateForm(curso);
    //     })
    //   }
    // );

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadById(id))
    // )
    // .subscribe(
    //   (curso) => {this.updateForm(curso);}
    // );
      // concatMap -> ordem da requisição importa
      // mergeMap -> ordem não importa
      // exhaustMap -> ele faz o pedido, espera a resposta e depois passa pra próxima requisição (casos de login)

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [
        curso.id
      ],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ],
      ],
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      let msgSuccess = "Curso criado";
      let msgErro = "Erro ao criar curso, tente novamente!";
      if (this.form.value.id) {
        msgSuccess = "Curso atualizado com sucesso";
        msgErro = "Erro ao atualizar curso, tente novamente!";
      }
      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlert(msgSuccess, 'success', 3000),
          this.location.back();
        },
        error => {
          this.modal.showAlert(
            msgErro,
            'danger',
            10000
          )
        }
      )
      // if (this.form.value.id) {
      //   this.service.update(this.form.value).subscribe(
      //     (success) => {
      //       this.modal.showAlert('Curso atualizado', 'success', 3000),
      //         this.location.back();
      //     },
      //     (error) =>
      //       this.modal.showAlert(
      //         'Erro ao atualizar curso, tente novamente!',
      //         'danger',
      //         10000
      //       ),
      //     () => console.log('update completo')
      //   )
      // } else{
      //   this.service.create(this.form.value).subscribe(
      //     (success) => {
      //       this.modal.showAlert('Curso criado', 'success', 3000),
      //         this.location.back();
      //     },
      //     (error) =>
      //       this.modal.showAlert(
      //         'Erro ao criar curso, tente novamente!',
      //         'danger',
      //         10000
      //       ),
      //     () => console.log('request completo')
      //   );
      // }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  onDelete(curso) {
    
  }
}
