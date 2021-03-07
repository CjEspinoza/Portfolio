import { typeSourceSpan } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }
  fadeout = false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      this.fadeout=true;
    }else{
      this.fadeout=false;
    }
  }
  appendMailTo(){
    this.name = this.name;
    this.message = this.message;
  }
}
