import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'list of Courses';
  imageUrl = 'https://i.guim.co.uk/img/media/16dcfd2ae3e0d3c5a7c37bd4805237c333ef6412/0_15_2835_1701/master/2835.jpg?width=300&quality=85&auto=format&fit=max&s=1401a2f95bb7eeecd417c421fdd2915d';
  courses;
  colsPan = 2;
  isActive = true;

  onSave(ev) {
    ev.stopPropagation(); // event doesnt bubble up
    console.log('btn clicked', ev);
  }
  divClicked() {
    console.log('div clicked');
  }
  // onKeyUp(ev) {
  //   if (ev.keyCode === 13) { console.log('enter was pressed'); }
  // }
  onKeyUp() {
     console.log('enter was pressed');
    }
  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
