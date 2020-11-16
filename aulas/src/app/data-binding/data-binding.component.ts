import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  valorAtual: string = "";
  valorSalvo: string = "";
  urlImagem = 'https://picsum.photos/id/1/200/300';
  cursoAngular = true;
  isMouseOver: boolean = false;
  nome = "abc";
  pessoa = {
    nome: 'Vinicius',
    idade: 20
  }
  nomeDoCurso = 'Angular';
  valorInicial = 15;
  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert('Botão Clicado')
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }
  SalvarValor(valor) {
    this.valorSalvo = valor;
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  onMudouValor(evento) {
    console.log(evento.novoValor)//Just cathing the value of the object
  }
  constructor() { }
  ngOnInit(): void {
  }
}

