import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-alunos-forms',
  templateUrl: './alunos-forms.component.html',
  styleUrls: ['./alunos-forms.component.css']
})
export class AlunosFormsComponent implements OnInit, OnDestroy {

  alunos: any;
  inscricao: Subscription;
  formMudou: boolean = false;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe( 
      (params: any) => {
        let id = params['id'];
        this.alunos = this.alunoService.getAlunosById(id);

        if (this.alunos === null) {
          this.alunos = {};
        }
      } 
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe()
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> | UrlTree {
    if (this.formMudou) {
      return confirm("As alterações no formulário não foram salvas e serão descartadas, deseja prosseguir?")
    } else {
      return true;
    }
  };

}
