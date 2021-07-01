import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Prato de Salada';
  anuncio: string = `O ${this.nomeProduto} está em promoção!!!`;
  idProduto: number = 1587;
  precoProduto: number = 11.99;
  promocao: boolean = true;
  foto: string = 'assets/img/salada-principal.png';
  dataValidade = '2021-12-31';

  constructor() {

  console.log('Nome do Produto: ', this.nomeProduto);
  console.log('Anúcio: ', this.anuncio);
  console.log('ID: ', this.idProduto);
  console.log('Preço: ', this.precoProduto);
  console.log('Promoção: ', this.promocao);

  }

  ngOnInit(): void {
  }

}
