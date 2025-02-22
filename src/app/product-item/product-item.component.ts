import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Output() onRemove = new EventEmitter<number>();

  selectedImage: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    if (this.product && this.product.images.length > 0) {
      this.selectedImage = this.product.images[0];
    }
  }

  selectImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
    this.currentIndex = this.product.images.indexOf(imageUrl);
  }

  prevImage(): void {
    if (this.product) {
      this.currentIndex = (this.currentIndex > 0)
        ? this.currentIndex - 1
        : this.product.images.length - 1;
      this.selectedImage = this.product.images[this.currentIndex];
    }
  }

  nextImage(): void {
    if (this.product) {
      this.currentIndex = (this.currentIndex < this.product.images.length - 1)
        ? this.currentIndex + 1
        : 0;
      this.selectedImage = this.product.images[this.currentIndex];
    }
  }

  increaseLikes() {
    this.product.likes = (this.product.likes || 0) + 1;
  }

  removeProduct() {
    this.onRemove.emit(this.product.id);
  }

  share(): void {
    const message = encodeURIComponent(`Смотри, какой продукт я нашёл: ${this.product.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram(): void {
    const message = encodeURIComponent(`Смотри, какой продукт я нашёл: ${this.product.link}`);
    window.open(`https://t.me/share/url?url=${this.product.link}&text=${message}`, '_blank');
  }
}
