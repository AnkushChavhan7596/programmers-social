import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedPost } from './suggested-post';

describe('SuggestedPost', () => {
  let component: SuggestedPost;
  let fixture: ComponentFixture<SuggestedPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
