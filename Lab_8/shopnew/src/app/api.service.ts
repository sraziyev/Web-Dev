// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: HttpClient) { }

    getCategories() {
        return this.http.get(`${this.baseUrl}/categories/`);
    }

    getProducts() {
        return this.http.get(`${this.baseUrl}/products/`);
    }

    getProductsByCategory(categoryId: number) {
        return this.http.get(`<span class="math-inline">\{this\.baseUrl\}/categories/</span>{categoryId}/products/`);
    }
}