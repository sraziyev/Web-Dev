import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  imports: [CommonModule, RouterModule],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        console.log(this.albums); // Добавлено для отладки
      },
      error: (error) => {
        console.error('Ошибка при получении альбомов:', error); // Добавлено для отладки
      },
    });
  }

  addAlbum() {
    const newAlbum = { title: 'New Album' };
    this.albumsService.createAlbum(newAlbum).subscribe((album) => {
      this.albums.push(album);
    });
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }
}