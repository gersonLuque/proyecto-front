import {Component, input, OnInit} from '@angular/core';
import {CourseService} from '@core/services/course.service';
import {Observable} from 'rxjs';
import {TaskResponseDto} from '@core/dto/taskResponseDto';
import {AsyncPipe, SlicePipe} from '@angular/common';
import {AddHeaderListComponent} from '../../../shared/components/add-header-list/add-header-list.component';

@Component({
  selector: 'app-task-management',
  imports: [
    AsyncPipe,
    SlicePipe,
    AddHeaderListComponent
  ],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css'
})
export class TaskManagementComponent implements OnInit{
  id = input.required<number>();

  tasks$:Observable<TaskResponseDto[]>

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.tasks$ = this.courseService.getTasksByCourseId(this.id());
  }
}
