import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/posts`, { params }).pipe(
      catchError(error => {
        console.error('Error fetching posts:', error);
        return throwError(() => new Error(error));
      })
    );
  }

  getComments(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${postId}/comments`).pipe(
      catchError(error => {
        console.error('Error fetching comments:', error);
        return throwError(() => new Error(error));
      })
    );
  }

  getTodos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos`).pipe(
      catchError(error => {
        console.error('Error fetching todos:', error);
        return throwError(() => new Error(error));
      })
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return throwError(() => new Error(error));
      })
    );
  }

  getAlbums(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums`).pipe(
      catchError(error => {
        console.error('Error fetching albums:', error);
        return throwError(() => new Error(error));
      })
    );
  }

  getPhotos(albumId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums/${albumId}/photos`).pipe(
      catchError(error => {
        console.error('Error fetching photos:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
