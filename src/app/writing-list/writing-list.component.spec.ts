import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingListComponent } from './writing-list.component';

describe('WritingListComponent', () => {
  let component: WritingListComponent;
  let fixture: ComponentFixture<WritingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
