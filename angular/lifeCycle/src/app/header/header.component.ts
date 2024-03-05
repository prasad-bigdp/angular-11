import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @Input() count!: any
  constructor()
  {
    console.log("constructor called")
  }
  ngOnChanges() {
    console.log("on changes is called")
  }
  ngOnInit()
  {
    //we can write fetching requests in ngOnIt, it will run only once
    console.log("ngOnInIt called")
  }
  ngDoCheck()
  {
    console.log("do check called")
  }
  ngAfterContentInit()
  {
        console.log("after the content DOM initiated but only once")
  }
  ngAfterContentChecked(){
      console.log("everytime check happends in contentDOM")
  }
  ngAfterViewInit(){
       console.log('after the view DOM initiated but only once');
  }
  ngAfterViewChecked() {
       console.log("everytime check happends in viewDOM");
  }
  ngOnDestroy()
  {
    console.log("called when going out of component")
  }
}
