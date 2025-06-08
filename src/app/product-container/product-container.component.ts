import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {


   product: Product [] =[
   {  
    productName: 'Vanila Cake',
      price: 100,
      stockCount: 0,
      description: 'Vanilla cake is a basic sponge which is enriched with vanilla flavouring and typically covered in a plain buttercream',
      imgUrl: 'https://atsloanestable.com/wp-content/uploads/2022/01/small-vanilla-cake3.jpg'
    }
    ,
   {
      productName: 'Chocalete Cake',
      price: 200,
      stockCount: 4,
      description: 'Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both',
      imgUrl: 'https://www.browneyedbaker.com/wp-content/uploads/2021/05/chocolate-cake-15-square.jpg'
    }
    ,
   {
      productName: 'Bluebarry Cake',
      price: 400,
      stockCount: 5,
      description: 'A blueberry cake is a delightful dessert featuring the sweet and tangy flavor of blueberries, often paired with a soft and tender cake base',
      imgUrl: 'https://yeyfood.com/wp-content/uploads/2024/09/WEB1Blueberry_Shortcake_C_ccb58128-f9b9-4a09-80ce-cc1ba655fd33_3-720x720.jpg'
    }
    ,
    {
      productName: 'Cheese Cake',
      price: 320,
      stockCount: 12,
      description: 'Cheesecake is a dessert cake featuring a thick, creamy filling of cheese, eggs, and sugar, often baked or no-baked and served with a crust',
      imgUrl: 'https://thebigmansworld.com/wp-content/uploads/2024/11/protein-cheesecake-recipe.jpg'
    }
  ];

  productOutputEvent(product: Product) {
    console.log('Clicked ' + product.productName)

}

}
