import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: any[] = [];
  st: string = '';
  c = 0;
  constructor(private ds:DataService )
  {
    this.ds.getAllProducts().subscribe((data:any) => this.products= data.products)
  }
  add()
  {
    this.c++;
  }
  search() {
    this.ds.getSearchProducts(this.st).subscribe((data:any) => {
      this.products=data.products
    })
  }
  all()
  {
       this.ds
         .getAllProducts()
         .subscribe((data: any) => (this.products = data.products));
  }
  filters(e: any)
  {
       this.ds
         .getCategoryProducts(e.target.textContent)
         .subscribe((data: any) => (this.products = data.products));
  }
}
