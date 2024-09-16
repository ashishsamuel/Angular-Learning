import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue:string="";
 
  changeSearchValue(eventData:Event){
    console.log("eventData",eventData);
    console.log("searchValue",(<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log("search value property value",this.searchValue);
    
  }
}
