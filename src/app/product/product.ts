import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  protected product : { id: number; name: string; price: number; } = { id: 1, name: 'Product A', price: 1000.98 };


  // products : { id: number; name: string; price: number; }[] = [
  //   { id: 1, name: 'Product A', price: 10.99 },
  //   { id: 2, name: 'Product B', price: 10.99 },
  //   { id: 3, name: 'Product C', price: 5.99 },
  //   { id: 4, name: 'Product D', price: 19.99 }
  // ]
}
