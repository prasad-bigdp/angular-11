import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:any[]=[]
  constructor(private ds: DataService) {
   this.ds.getData().subscribe((data:any)=>this.projects=data)
}
}
