import { Component } from '@angular/core';

@Component({
  selector: 'app-base-task',
  imports: [],
  templateUrl: './base-task.component.html',
  styleUrl: './base-task.component.css'
})
export class BaseTaskComponent {
  title!: string;
  description!: string;
  category!: string;
  status!: string; 
  deadline!: Date;
}
