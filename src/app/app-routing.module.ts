import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }