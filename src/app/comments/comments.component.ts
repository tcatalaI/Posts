import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  postId: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.apiService.getComments(this.postId).subscribe({
      next: (data: any[]) => {
        this.comments = data;
      },
      error: (error) => {
        console.error('Error in subscription:', error);
      }
    });
  }
}
