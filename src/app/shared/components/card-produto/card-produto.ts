import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: false,
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {

  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() promocao: boolean = false;
  @Input() idProduto: number = 0;
  @Input() dataNascimento: Date = new Date();
  @Input() precoProduto: number = 0;

}