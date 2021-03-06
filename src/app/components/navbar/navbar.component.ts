import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  espi: String= "ESPI";
  symbol1: String="<";
  symbol2: String="/>";
  ngOnInit(): void {
  }

}
