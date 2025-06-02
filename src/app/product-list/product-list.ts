import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; //Added this, import for routing

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  isShowClicked : boolean = true;
  sub : any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {//Trying to avoide the use of Router Outlet with boolean parameter.
    // this.sub = this.route.params.subscribe(params => {
    //   this.isShowClicked = params['isShowClicked'] === 'true';
    //   }
    // );
  }

  products: Product[] = [
      { id: 1, name: 'Product A', price: 10.99 },
      { id: 2, name: 'Product B', price: 19.99 },
      { id: 3, name: 'Product C', price: 5.99 }
    ];
}
