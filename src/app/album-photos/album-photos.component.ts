import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.apiService.getPhotos(this.albumId).subscribe({
      next: (data: any[]) => {
        this.photos = data;
      },
      error: (error) => {
        console.error('Error in subscription:', error);
      }
    });
  }
}
