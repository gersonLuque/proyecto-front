import {Component, input} from '@angular/core';

@Component({
  selector: 'app-edit-task',
  imports: [],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export default class EditTaskComponent {

  taskId = input.required<number>();

  constructor() {

  }

}
