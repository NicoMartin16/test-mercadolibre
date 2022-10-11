import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  const mockError = {
    status: 404,
    message: 'Item not found',
    error: 'BAD_REQUEST_NOT_FOUND'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.debugElement.componentInstance;
    component.error = mockError;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.error).toBeTruthy();
  });
});
