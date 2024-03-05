import { Injectable } from '@angular/core';
import {API_URL} from '../../environments/environments'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  empty:any[]=[]
  private cartSubject = new BehaviorSubject(0);
  cartSubObs = this.cartSubject.asObservable();
  private cartItemsSubject = new BehaviorSubject(this.empty);
  cartItemsSubObs = this.cartSubject.asObservable();
  constructor(private hc: HttpClient) {}
  addValue(prod:Object) {
    console.log('service called');
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c + 1);
    console.log(this.cartSubject.getValue());
    const items = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([ ...items, prod ])
    console.log(this.cartItemsSubject.getValue())
  }
  getCount() {
    return this.cartSubject.getValue();
  }
  getItems()
  {
    return this.cartItemsSubject.getValue();
  }
  removeValue() {
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c - 1);
  }
  getProducts() {
    return this.hc.get(`${API_URL}`);
  }
  getProduct(id: number) {
    return this.hc.get(`${API_URL}/${id}`);
  }
}
