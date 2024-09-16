import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }

  slogan:string="free shoppping 24 * 7";
  imageUrl:string="assets/images/company-img.jpg";

  getSlogan(){
    return 'free shopping ends today'
  }
}
