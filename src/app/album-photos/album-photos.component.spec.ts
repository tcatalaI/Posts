import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosComponent } from './album-photos.component';

describe('AlbumPhotosComponent', () => {
  let component: AlbumPhotosComponent;
  let fixture: ComponentFixture<AlbumPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumPhotosComponent]
    });
    fixture = TestBed.createComponent(AlbumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
