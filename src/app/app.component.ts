import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  currentPage: number = 1;
  postsPerPage: number = 10;

  constructor(private apiService: ApiService) {
    console.log('AppComponent initialized');
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.apiService.getPosts(this.currentPage, this.postsPerPage).subscribe((data: any[]) => {
      console.log(data); // Afegir aquest console.log per verificar les dades
      this.posts = data;
    }, error => {
      console.error('Error in subscription:', error);
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadPosts();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPosts();
    }
  }
}
