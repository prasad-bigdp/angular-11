import { Component, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  c!: number;
  constructor(private api: ApiService)
  {
    this.api.cartSubObs.subscribe((data)=>this.c=data)
  }
}
