import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private asd: HttpClient) { }
  
  getData() {
    return this.asd.get('https://api.sampleapis.com/jokes/goodJokes');
  }
}
