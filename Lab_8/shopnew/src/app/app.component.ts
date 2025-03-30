import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categories } from './data';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories;
  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }
}
