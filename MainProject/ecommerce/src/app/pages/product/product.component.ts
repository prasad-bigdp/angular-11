import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any;
  id!: number;
  constructor(private api:ApiService,private route:ActivatedRoute)
  {
    this.route.params.subscribe((data) => this.id = data[ 'id' ])
    this.api.getProduct(this.id).subscribe((data)=>this.product=data)
  
  }
}
