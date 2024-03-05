import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
products:any[]=[]
  constructor(private api: ApiService) { }

  ngOnInit()
  {
     this.api.getProducts().subscribe((data:any)=>this.products=data.products)
  }
  add(prod:Object)
  {
    console.log("products add called")
    this.api.addValue(prod);
  }


}
