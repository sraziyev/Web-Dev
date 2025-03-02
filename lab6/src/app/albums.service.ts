import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  updateAlbum(id: number, updatedAlbum: any): Observable<any> {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      updatedAlbum
    );
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
  }
}