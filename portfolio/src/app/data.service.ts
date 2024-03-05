import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
  getData()
  {
    return this.hc.get('https://fakestoreapi.com/products')
  }
  get(id:any)
  {
    return this.hc.get(`https://fakestoreapi.com/products/${id}`);
  }
}
