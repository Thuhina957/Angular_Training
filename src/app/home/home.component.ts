import { Component, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
[x: string]: any;

  constructor(public cartService: CartService){}

  loggerService = inject(LoggerService);

  ngOnInit () {
    console.log("Home component initialized");
  }

  ngOnDestroy (){
    console.log("Home component destroyed"); 
  }

  ngDoCheck (){
    console.log("Home component change detection triggered"); 
  }

  ngOnChane (){
    console.log("Home component change detection");
  }

  increment (){
    this.loggerService.log("Incremented clicked");
    let count = this.cartService.count() + 1;
    this.cartService.count.set(count);
  
  }

  decrement (){
    this.loggerService.log("Incremented clicked");
    let count = this.cartService.count() -1;
    this.cartService.count.set(count);

}

}
