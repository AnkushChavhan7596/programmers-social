import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFooter } from './post-footer';

describe('PostFooter', () => {
  let component: PostFooter;
  let fixture: ComponentFixture<PostFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
