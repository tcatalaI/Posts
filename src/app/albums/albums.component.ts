import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.apiService.getAlbums().subscribe({
      next: (data: any[]) => {
        this.albums = data;
      },
      error: (error) => {
        console.error('Error in subscription:', error);
      }
    });
  }
}
