import { Component } from '@angular/core';
import { CrudService } from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  books: any[] = [];
  bookId!: number;
  bookName!: string;
  bookImageLink!: string;
  showForm = false;
  editMode = false;
  constructor(private cs: CrudService) {
    this.cs.getData().subscribe((data:any)=>this.books=data)
  }
  add()
  {
    this.showForm = true;
    document.body.style.backgroundColor='rgba(0,0,0,0.4)'
  }
  remove(id:number)
  {
    let d = confirm("Are you sure?");
    if (d) {
       this.cs.deleteData(id).subscribe((data: any) => {
         this.books = data;
         window.location.reload();
       });
    }
  }
  stop()
  {
    this.showForm = false;
    document.body.style.backgroundColor = 'white';
  }
  update(id:number)
  {
    console.log(id)
    this.bookId=id
    this.editMode = true;
    this.showForm = true;
  }
  submitData()
  {
    if (this.editMode) {
       let newBook = {
         id: this.bookId,
         title: this.bookName,
         image: this.bookImageLink,
      };
      this.cs.putData(newBook, this.bookId).subscribe((data) =>
      {
        console.log(data);
        this.showForm = false;
        window.location.reload()
      }
      )
    } else {
      console.log("hiiiiiiiiiiiiii") 
      let newBook = {
         id: this.bookId,
         title: this.bookName,
         image: this.bookImageLink,
       };
       this.cs.postData(newBook).subscribe((data) => {
         console.log(data);
         window.location.reload();
         this.stop();
       });
    }
   
   

  }
 
}
