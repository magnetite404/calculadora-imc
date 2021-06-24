
import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Abaixo 18,5', name: 'Abaixo do Peso'},
  {position: '18,6 - 24,9', name: 'Peso Adequado'},
  {position: '25 - 29,9', name: 'Sobrepeso'},
  {position: '30 - 34,9', name: 'Obesidade Grau I'},
  {position: '35 - 39,9', name: 'Obesidade Grau II'},
  {position: 'Maior ou Igual 40', name: 'Obesidade Mórbida'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'dio-tabela',
  styleUrls: ['./tabela.component.css'],
  templateUrl: './tabela.component.html',
})
export class TabelaComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}