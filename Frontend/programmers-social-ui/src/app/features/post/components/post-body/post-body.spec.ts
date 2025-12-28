import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBody } from './post-body';

describe('PostBody', () => {
  let component: PostBody;
  let fixture: ComponentFixture<PostBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
