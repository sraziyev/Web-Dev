import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from './products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList = products;
  selectedImage: { [key: number]: string } = {};
  currentIndex: { [key: number]: number } = {};

  constructor() {
    this.productsList.forEach(product => {
      this.currentIndex[product.id] = 0;
    });
  }

  selectImage(productId: number | undefined, imageUrl: string): void {
    if (productId !== undefined) {
      const product = this.productsList.find(p => p.id === productId);
      if (product) {
        this.selectedImage[productId] = imageUrl;
        this.currentIndex[productId] = product.images.indexOf(imageUrl);
      }
    }
  }

  prevImage(productId: number | undefined): void {
    if (productId !== undefined) {
      const product = this.productsList.find(p => p.id === productId);
      if (product) {
        this.currentIndex[productId] = (this.currentIndex[productId] > 0)
                                        ? this.currentIndex[productId] - 1
                                        : product.images.length - 1;
        this.selectedImage[productId] = product.images[this.currentIndex[productId]];
      }
    }
  }

  nextImage(productId: number | undefined): void {
    if (productId !== undefined) {
      const product = this.productsList.find(p => p.id === productId);
      if (product) {
        this.currentIndex[productId] = (this.currentIndex[productId] < product.images.length - 1)
                                        ? this.currentIndex[productId] + 1
                                        : 0;
        this.selectedImage[productId] = product.images[this.currentIndex[productId]];
      }
    }
  }

  share(product: any): void {
    const message = encodeURIComponent(`Смотри, какой продукт я нашёл: ${product.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram(product: any): void {
    const message = encodeURIComponent(`Смотри, какой продукт я нашёл: ${product.link}`);
    window.open(`https://t.me/share/url?url=${product.link}&text=${message}`, '_blank');
  }
}
