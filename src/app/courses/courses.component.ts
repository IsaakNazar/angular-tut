import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'list of Courses';
  imageUrl = 'https://static.euronews.com/articles/stories/03/21/73/66/880x495_cmsv2_298e3b01-877d-57e3-9ce0-0542084c5af4-3217366.jpg';
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

  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
