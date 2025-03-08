import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: any;
  @Output() taskCompleted = new EventEmitter<number>();

  markAsCompleted() {
    this.taskCompleted.emit(this.task.id);
  }
}
