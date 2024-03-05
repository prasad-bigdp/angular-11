import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
  getAllProducts()
  {
    return this.hc.get('https://dummyjson.com/products');
  }
  getSearchProducts(name:any)
  {
    return this.hc.get(`https://dummyjson.com/products/search?q=${name}`);
  }
  getCategoryProducts(cate:any)
  {
    return this.hc.get(`https://dummyjson.com/products/category/${cate}`);
  }
}
