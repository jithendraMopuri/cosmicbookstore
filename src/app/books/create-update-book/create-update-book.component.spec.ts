import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateBookComponent } from './create-update-book.component';

describe('CreateUpdateBookComponent', () => {
  let component: CreateUpdateBookComponent;
  let fixture: ComponentFixture<CreateUpdateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateBookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUpdateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
