import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  
  @Output() courseSearchedText: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchCourseText(){
    this.courseSearchedText.emit(this.searchText);
  }

}
