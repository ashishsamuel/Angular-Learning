import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-filter-course',
  templateUrl: './filter-course.component.html',
  styleUrls: ['./filter-course.component.css']
})
export class FilterCourseComponent implements OnInit {

  filterOptionValue : string = "";
  allCourseCount: number = 0;
  availableCourseCount: number = 0;
  freeCourseCount: number = 0;
  @Input('totalCourses') allCourses: Course[];
  @Output() selectedFilterOption : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log("all courses",this.allCourses);
    this.getAllCourseCount();
    this.getAllFreeCourseCount();
    this.getAllAvailableCourseCount();
    console.log("all course count",this.allCourseCount);
    console.log("free course count",this.freeCourseCount);
    console.log("available course count",this.availableCourseCount);
  }

  getAllCourseCount(){
    this.allCourseCount = this.allCourses.length;
  }

  getAllFreeCourseCount(){
    this.freeCourseCount = this.allCourses.filter(course=>course.price == "freecourse").length;
  }


  getAllAvailableCourseCount(){
    this.availableCourseCount = this.allCourses.filter(course=>course.available == "availablecourse").length;
   
  }

  selectFilterOption(){
    this.selectedFilterOption.emit(this.filterOptionValue)
    // console.log("event",(<HTMLInputElement>event.target).value);
    console.log("filterOptionValue",this.filterOptionValue);
    

    
  }

}
