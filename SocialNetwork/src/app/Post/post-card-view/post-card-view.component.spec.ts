import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardViewComponent } from './post-card-view.component';

describe('PostCardViewComponent', () => {
  let component: PostCardViewComponent;
  let fixture: ComponentFixture<PostCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
