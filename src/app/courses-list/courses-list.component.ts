import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courseFilterOptionSelected : string = 'allcourse';
  searchText : string = '';

  courses:Course[] = [
    {id:'1',name:'Angular',description:'Angular 13 course',price:'2000',discount:'200',available:'availablecourse'},
    {id:'2',name:'React',description:'React 17 course',price:'freecourse',available:'notavailablecourse'},
    {id:'3',name:'Next JS',description:'Next JS course',price:'1100',discount:'150',available:'availablecourse'},
    {id:'4',name:'Mongo DB',description:'Mongo DB course',price:'2800',discount:'120',available:'availablecourse'},
    {id:'5',name:'Java',description:'Java course',price:'freecourse',available:'notavailablecourse'},
    {id:'6',name:'MEAN',description:'MEAN course',price:'6300',discount:'140',available:'availablecourse'},
    {id:'7',name:'MERN',description:'MERN course',price:'4900',discount:'130',available:'availablecourse'},
    {id:'8',name:'Python',description:'Python course',price:'freecourse',available:'notavailablecourse'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectedCourseFilterOption(data:string){
    this.courseFilterOptionSelected = data;
    console.log("data inside parent component",data);
  }

  fetchSearchText(searchValue:string){
    this.searchText = searchValue;
    console.log("searchText inside parent component",this.searchText);
  }

}
