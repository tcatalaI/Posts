import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];
  albumId: number = 0;
  currentPage: number = 1;
  photosPerPage: number = 10;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id']; // Converteix el paràmetre a número
      this.loadPhotos();
    });
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

  get paginatedPhotos(): any[] {
    const startIndex = (this.currentPage - 1) * this.photosPerPage;
    return this.photos.slice(startIndex, startIndex + this.photosPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.photosPerPage < this.photos.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
