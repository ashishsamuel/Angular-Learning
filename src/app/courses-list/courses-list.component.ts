import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses:Course[] = [
    {id:'1',name:'Angular',description:'Angular 13 course',price:'2000',discount:'200'},
    {id:'2',name:'React',description:'React 17 course',price:'3000',discount:'300'},
    {id:'3',name:'Next JS',description:'Next JS course',price:'1100',discount:'150'},
    {id:'4',name:'Mongo DB',description:'Mongo DB course',price:'2800',discount:'120'},
    {id:'5',name:'Java',description:'Java course',price:'1400',discount:'110'},
    {id:'6',name:'MEAN',description:'MEAN course',price:'6300',discount:'140'},
    {id:'7',name:'MERN',description:'MERN course',price:'4900',discount:'130'},
    {id:'8',name:'Python',description:'Python course',price:'1900',discount:'220'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
