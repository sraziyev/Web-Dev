import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskDetailComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  categories = ['Work', 'Personal', 'Study'];
  selectedCategory: string | null = null;
  selectedTask: any = null;

  tasks = [
    { id: 1, title: 'Task 1', description: 'Find job', category: 'Work', status: 'Pending', deadline: new Date() },
    { id: 2, title: 'Task 2', description: 'Dont forget about deadlines', category: 'Personal', status: 'Pending', deadline: new Date() },
    { id: 3, title: 'Task 3', description: 'Pass task for bonus points', category: 'Study', status: 'Pending', deadline: new Date() }
  ];

  getFilteredTasks() {
    return this.tasks.filter(task => task.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedTask = null; 
  }

  showTaskDetails(task: any) {
    this.selectedTask = task;
  }

  onBackToList() {
    this.selectedTask = null;
  }


  onBackToCategories() {
    this.selectedCategory = null;
  }

  onTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }
}
