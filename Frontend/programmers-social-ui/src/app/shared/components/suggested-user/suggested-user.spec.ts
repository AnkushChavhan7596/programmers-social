import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedUser } from './suggested-user';

describe('SuggestedUser', () => {
  let component: SuggestedUser;
  let fixture: ComponentFixture<SuggestedUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
