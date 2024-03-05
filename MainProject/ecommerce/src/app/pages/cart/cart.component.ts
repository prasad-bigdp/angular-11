import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: any[] = [];
  total!: number;
  constructor(private api:ApiService) {
    this.items = this.api.getItems();
    this.total=this.findTotal()
  }
  findTotal()
  {
    return this.items.reduce((sum,i)=>i.price+sum,0)
  }
  removeItem(i:number)
  {
    this.items.splice(i, 1);
    this.items = [ ...this.items ];
    this.total=this.findTotal()
  }



}
