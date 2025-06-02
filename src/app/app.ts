import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; //Added this, import for routing

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'cam-ang-proj';
  protected Greeting = 'Cambrium managers';

  constructor( private navigateRoute : Router) { }

  GoToProductList = () => {
    this.navigateRoute.navigate(['/product-list',{}]); // navigate to product-list

  }
}
