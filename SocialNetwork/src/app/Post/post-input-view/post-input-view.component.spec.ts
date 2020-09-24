import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInputViewComponent } from './post-input-view.component';

describe('PostInputViewComponent', () => {
  let component: PostInputViewComponent;
  let fixture: ComponentFixture<PostInputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
