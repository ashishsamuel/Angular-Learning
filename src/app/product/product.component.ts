import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1,name:"shirt",price:500,available:"yes"},
    {id:2,name:"Tshirt",price:400,available:"no"},
    {id:3,name:"pants",price:300,available:"no"},
    {id:4,name:"shorts",price:200,available:"yes"}
  ]

}
