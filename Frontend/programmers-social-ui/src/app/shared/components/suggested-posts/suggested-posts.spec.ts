import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedPosts } from './suggested-posts';

describe('SuggestedPosts', () => {
  let component: SuggestedPosts;
  let fixture: ComponentFixture<SuggestedPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
